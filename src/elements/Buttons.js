import styled from 'styled-components';
import { fixedTop } from '../utilities';

const color = "white";

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: indigo;
  /* if props.type === 'cancel', then set the background to tomato */
  /* ${props => props.type === 'cancel' && 'background: tomato;'} */
  /* background: ${props => (props.type === 'cancel' ? 'tomato' : 'indigo')}; */
  /* background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')}; */
`;

// extend Button and create a new one of different color
export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;