import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html {
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ theme }) => theme.text_black};
  
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Gelion Custom', sans-serif;
  font-weight: 400;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
a {
  text-decoration: none;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyle;
