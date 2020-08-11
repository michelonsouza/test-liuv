import React, { useContext, useCallback, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd, MdRemove, MdDeleteForever } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { monetaryFormat } from '../../utils';
import { DefaultRootState } from '../../store';
import { Card, Button } from '../../components';
import {
  Container,
  Content,
  ItemsContainer,
  ItemRow,
  TotalRow,
} from './styles';
import { Item } from '../../store/modules/cart/reducer';
import {
  addOneProduct,
  removeOneProduct,
  removeFronCart,
  finish,
} from '../../store/modules/cart/actions';

const Cart: React.FC = () => {
  const cart = useSelector((state: DefaultRootState) => state.cart);
  const { colors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const total = useMemo(() => {
    const ammount = cart.items.reduce(
      (accumulator, item) => accumulator + item.quantity * item.unit_price,
      0,
    );

    return monetaryFormat(ammount);
  }, [cart.items]);

  const handleFinish = useCallback(() => {
    toast.success('Seu pedido foi finalizado com sucesso');
    dispatch(finish());
  }, [dispatch]);

  const handleRemove = useCallback(
    item => {
      dispatch(removeFronCart(item));
    },
    [dispatch],
  );

  const handleAddOne = useCallback(
    (product: Item) => {
      dispatch(addOneProduct(product));
    },
    [dispatch],
  );

  const handleRemoveOne = useCallback(
    (product: Item) => {
      dispatch(removeOneProduct(product));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!cart.items.length) {
      history.push('/');
    }
  }, [cart.items, history]);

  return (
    <Container>
      <Content>
        <h1>Carrinho</h1>
        <Card>
          <ItemsContainer>
            {cart.items.map(item => (
              <ItemRow key={item.id} item={item}>
                <div className="item-img" />
                <span>{item.name}</span>
                <div className="quantity">
                  <button
                    type="button"
                    disabled={item.quantity === 1}
                    onClick={() => handleRemoveOne(item)}
                  >
                    <MdRemove color={colors.primary} size={20} />
                  </button>
                  <input type="text" readOnly value={item.quantity} />
                  <button type="button" onClick={() => handleAddOne(item)}>
                    <MdAdd color={colors.primary} size={20} />
                  </button>
                </div>
                <button
                  className="remove-cart"
                  type="button"
                  onClick={() => handleRemove(item)}
                >
                  <MdDeleteForever color={colors.primary} size={20} />
                </button>
                <span className="sub-total">
                  {monetaryFormat(item.quantity * item.unit_price)}
                </span>
              </ItemRow>
            ))}

            <TotalRow>
              <span>Total</span>
              <h3>{total}</h3>
            </TotalRow>
            <Button variant="success" onClick={handleFinish}>
              Finalizar compra
            </Button>
          </ItemsContainer>
        </Card>
      </Content>
    </Container>
  );
};

export default Cart;
