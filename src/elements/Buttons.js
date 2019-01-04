import styled from 'styled-components';
import { teal, elevation } from '../utilities';

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 2rem;
  ${elevation[1]};
  transition: .3s ease box-shadow;
  background: ${teal};
  /* if props.type === 'cancel', then set the background to tomato */
  /* ${props => props.type === 'cancel' && 'background: tomato;'} */
  /* background: ${props => (props.type === 'cancel' ? 'tomato' : 'indigo')}; */
  /* background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')}; */
  
  &:hover {
    ${elevation[2]};
  }

  ${({ size }) => {
    if (size === 'small') {
      return `
        font-size: 1rem;
        padding: 3px 10px;
      `;
    }
  }}

  ${({ type }) => {
    if (type === 'cancel') {
      return `
        background: tomato;
      `;
    }
  }}
`;

// extend Button and create a new one of different color
export const CancelButton = styled(Button)`
  background: tomato;
`;