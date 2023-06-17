import styled from "styled-components";
import { Breakpoint } from "../../tokens/breakpoints";

export const AppWrapper = styled.div`
  width: 100%;
  min-width: ${Breakpoint.MIN};
  max-width: ${Breakpoint.MAX};
  margin: 0 auto;
`;
