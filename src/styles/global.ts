import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: 'Open Sans', sans-serif; 
  }

  html, .App {
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.background};
    height: 100%;
  }

  #root{
    height: 100%;
    width: 100%;
  }

  .Body {
    height: 100%;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  @font-face {
    font-family: Lato;
    font-weight: 100;
    src: url(fonts/Lato-Thin.ttf);
  }
  @font-face {
    font-family: Lato;
    font-weight: 300;
    src: url(fonts/Lato-Light.ttf);
  }
  @font-face {
    font-family: Lato;
    font-weight: 400;
    src: url(fonts/Lato-Regular.ttf);
  }
  @font-face {
    font-family: Lato;
    font-weight: 700;
    src: url(fonts/Lato-Bold.ttf);
  }
  @font-face {
    font-family: Lato;
    font-weight: 900;
    src: url(fonts/Lato-Black.ttf);
  }
  @font-face {
    font-family: Acquire;
    src: url(fonts/Aquire-BW0ox.otf);
  }
`