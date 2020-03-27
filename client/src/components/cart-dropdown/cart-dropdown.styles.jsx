import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: rgba(80, 80, 80, 1);

    &:hover {
      cursor: pointer;
    }

    &:active {
      background: rgb(92, 92, 92);
    }
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
