import { createGlobalStyle } from "styled-components";

const Breakpoint = {
  MIN: "var(--breakpoint-min)",
  MAX: "var(--breakpoint-max)",
};

const GlobalBreakpoints = createGlobalStyle`
  :root {
    --breakpoint-min: 320px;
    --breakpoint-max: 740px;
  }
`;

export { Breakpoint, GlobalBreakpoints };
