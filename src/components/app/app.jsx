import { GlobalResets } from "../../tokens/resets";
import { GlobalFonts } from "../../tokens/fonts";
import { GlobalColors } from "../../tokens/colors";
import { GlobalBreakpoints } from "../../tokens/breakpoints";
import { AppWrapper } from "./styles";
import Calendar from "../../features/calendar/calendar";

function App() {
  return (
    <>
      <GlobalResets />
      <GlobalBreakpoints />
      <GlobalColors />
      <GlobalFonts />
      <AppWrapper>
        <Calendar />
      </AppWrapper>
    </>
  );
}

export default App;
