import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { lighten } from 'polished';
import { teal, elevation } from '../utilities';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,

  cancel: () => `
    background: tomato;
  `
}

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 2rem;
  ${elevation[1]};
  transition: .3s ease box-shadow background;
  background: ${teal};
  /* if props.type === 'cancel', then set the background to tomato */
  /* ${props => props.type === 'cancel' && 'background: tomato;'} */
  /* background: ${props => (props.type === 'cancel' ? 'tomato' : 'indigo')}; */
  /* background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')}; */
  
  &:hover {
    background: ${lighten(0.2, teal)};
    ${elevation[2]};
  }

  /* ${({ size }) => {
    if (size === 'small') {
      return `
        font-size: 1rem;
        padding: 3px 10px;
      `;
    }
  }} */

  /* ${({ type }) => {
    if (type === 'cancel') {
      return `
        background: tomato;
        &:hover {
          background: ${lighten(0.2, 'tomato')};
        }
      `;
    }
  }} */


  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

// extend Button and create a new one of different color
export const CancelButton = styled(Button)`
  background: tomato;
`;