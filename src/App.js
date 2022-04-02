import React from "react";
import { ReactComponent as TextIcon } from "assets/admin-icon.svg";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import theme from "constants/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        Metacare <TextIcon />
      </div>
    </ThemeProvider>
  );
};

export default App;
