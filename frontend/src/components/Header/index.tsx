import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { DefaultRootState } from '../../store';

import { Container } from './styles';

import burgerLogo from '../../assets/images/burger.svg';

const Header: React.FC = () => {
  const { items } = useSelector((state: DefaultRootState) => state.cart);

  return (
    <Container>
      <nav>
        <Link to="/" title="Master Burger">
          <img src={burgerLogo} alt="Master Burger" />
          <span className="xs">MB</span>
          <span className="sm">Master Burger</span>
        </Link>

        <ul>
          <li>
            <Link to="/">Categorias</Link>
          </li>
          <li>
            <Link to="/cart" className="go-to-cart">
              <MdShoppingCart size={24} color="#d32f2f" />
              {items.length > 0 && <span>{items.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
