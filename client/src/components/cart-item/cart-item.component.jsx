import React from 'react';

import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name
} from './cart-item.styles';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt="item" />
    <ItemDetails className="item-details">
      <Name>{name}</Name>
      <span className="price">
        {quantity} x {price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default React.memo(CartItem);
