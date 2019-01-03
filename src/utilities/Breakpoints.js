import { css } from 'styled-components';


const size = {
  small: 400,
  med: 960,
  large: 1140
};


// ! Media Queries in Pixels
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc;
}, {});

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc;
}, {});


/* 

! Media Queries in Em

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16 }em) {
      ${css(...args)}
    }
  `
  return acc;
}, {});

*/
