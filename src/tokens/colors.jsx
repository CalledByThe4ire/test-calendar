import { createGlobalStyle } from "styled-components";

const Color = {
  WHITE: "var(--color-white)",
  BLACK: "var(--color-black)",
  GRAY: "var(--color-gray)",
  LIGHT_GRAY: "var(--color-light-gray)",
  RED: "var(--color-red)",
  PURPLE: "var(--color-purple)",
  LIGHT_PURPLE: "var(--color-light-purple)",
};

const GlobalColors = createGlobalStyle`
  :root {
    --color-white: #ffffff;
    --color-black: #0b0b0b;
    --color-gray: #f6f6f6;
    --color-light-gray: #e7e7e7;
    --color-red: #cc2727;
    --color-purple: #b3b7ff;
    --color-light-purple: #ebecff;
  }
`;

export { Color, GlobalColors };
