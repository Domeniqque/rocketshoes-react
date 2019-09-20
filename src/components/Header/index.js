import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import PropType from 'prop-types';

import { Container, Cart } from './styles';
import header from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={header} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>

        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropType.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
