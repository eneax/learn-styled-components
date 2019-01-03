import { css } from 'styled-components';

// CSS Helper --> Needed for props in mixins
export const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => css`
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const absolute = ({
  x = 0,
  y = 0,
  yProp = "top",
  xProp = "left"
} = {}) => css`
  position: absolute;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;


/*

{ x = 0, y = 0 } = {}

- the default value is an empty object
- if we pass an object, then the default parameters are 0
- yProp default is 'top' 
- xProp default is 'left'

*/