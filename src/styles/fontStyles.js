import { createGlobalStyle } from "styled-components";
import GelionBlack from "fonts/Gelion/Gelion-Black.woff";
import GelionBlack2 from "fonts/Gelion/Gelion-Black.woff2";
import GelionBlack3 from "fonts/Gelion/Gelion-Black.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Gelion Custom';
  src: url(${GelionBlack}) format('woff'),
  url(${GelionBlack2}) format('woff2'),
  url(${GelionBlack3}) format('ttf'),
}
`;

export default FontStyles;
