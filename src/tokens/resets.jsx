import { createGlobalStyle } from "styled-components";
import { Font } from "./fonts";
import { Color } from "./colors";
import { normalize } from "styled-normalize";

const GlobalResets = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;
  }

  body {
    height: 100vh;
    width: 100vw;
    font-family: ${Font.SF_PRO_DISPLAY};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1;
    color: ${Color.BLACK};
    background-color: ${Color.WHITE};
  }

  button,
  input,
  select {
    all: unset;
    font: inherit;
  }

  a {
    text-decoration: none;

    &:hover,
    &:active,
    &:visited {
      text-decoration: none;
    }
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export { GlobalResets };
