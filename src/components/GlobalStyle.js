import { createGlobalStyle } from 'styled-components';
import bg from '../images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
 body{
   color: #332c36;
   padding: 0;
   margin: 0;
   font-family: 'New tegomin', serif;
   background: url(${bg}) center no-repeat;
   background-size: cover;
 }
`;
