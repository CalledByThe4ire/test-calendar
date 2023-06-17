import { createGlobalStyle } from "styled-components";

import SFProDisplayLight from "../fonts/SF-Pro-Display-Light.woff2";
import SFProDisplayRegular from "../fonts/SF-Pro-Display-Regular.woff2";

const Font = {
  SF_PRO_DISPLAY: "var(--font-sf-pro-display)",
};

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${SFProDisplayLight});
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${SFProDisplayRegular});
  }

  :root {
    --font-sf-pro-display: 'SF Pro Display', Arial, sans-serif;
  }
`;

export { Font, GlobalFonts };
