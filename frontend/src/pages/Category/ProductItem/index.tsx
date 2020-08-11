import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addToCart } from '../../../store/modules/cart/actions';
import { Product } from '../../../@types';
import { Card, Button } from '../../../components';
import { CardImg, CategoryInfo } from '../../Categories/styles';

interface FormattedProduct extends Product {
  formattedPrice?: string;
}

export interface ProductItemProps {
  product: FormattedProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = useCallback(() => {
    const { id, name, description, unit_price, image } = product;

    dispatch(addToCart({ id, name, description, unit_price, image }));
    history.push('/cart');
  }, [dispatch, product, history]);

  return (
    <Card>
      <CardImg bgImg={product.image} title={product.name} />
      <CategoryInfo>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="price">{product.formattedPrice}</span>
        <Button variant="primary" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </Button>
      </CategoryInfo>
    </Card>
  );
};

export default ProductItem;
