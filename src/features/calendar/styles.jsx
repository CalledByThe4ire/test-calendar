import styled from "styled-components";
import { Color } from "../../tokens/colors";
import { DAYS_PER_WEEK, CELLS_PER_ROW, HOURS_PER_DAY } from "../../consts";

export const CalendarWrapper = styled.div`
  $black: ${Color.BLACK};
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header" "body" "footer";
  width: inherit;
  height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const CalendarHeader = styled.header`
  grid-area: header;
  width: inherit;
`;

export const TitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  min-height: 150px;
  padding: 0 8%;
`;

export const WeekDaysWrapper = styled.div`
  padding-left: 12%;
  padding-right: 1%;
  background-color: ${Color.GRAY};
  border-top: 1px solid ${Color.LIGHT_GRAY};
  border-bottom: 1px solid ${Color.LIGHT_GRAY};
`;

export const WeekDaysList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
  place-items: center;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
`;

export const WeekDay = styled.li`
  font-size: 20px;
`;

export const Day = styled.li`
  font-size: 32px;
  color: ${({ isCurrentDate }) => (isCurrentDate ? Color.WHITE : "inherit")};
  border-radius: 50%;
  background-color: ${({ isCurrentDate }) =>
    isCurrentDate ? Color.RED : "transparent"};
`;

export const ControlButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover,
  &:active {
    &::before {
      border-color: ${Color.BLACK};
    }
  }

  &::before {
    content: "";
    display: block;
    padding: 7px;
    border-width: 0 3px 3px 0;
    border-color: ${Color.RED};
    border-style: solid;
    transition: all 0.3s ease;
  }
`;

export const WeekDaysControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 15px 5%;

  ${ControlButton}:first-of-type {
    transform: rotate(135deg);
  }
  ${ControlButton}:last-of-type {
    transform: rotate(-45deg);
  }
`;

export const Date = styled.span`
  font-size: 25px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 16px;
  padding: 0;
  font-size: 44px;
  font-weight: 300;
`;

export const TitleButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover,
  &:active {
    &::before,
    &::after {
      background-color: ${Color.BLACK};
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    background-color: ${Color.RED};
    transition: all 0.3s ease;
  }

  &::before {
    width: 3px;
    height: 30px;
  }

  &::after {
    width: 30px;
    height: 3px;
  }
`;

export const CalendarBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 1fr;
  padding-top: 16px;
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  aspect-ratio: 1/1;
`;

export const Time = styled.div`
  margin-top: -8px;
`;

export const EventCell = styled(Cell)`
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  border-top-color: ${({ counter }) =>
    counter <= CELLS_PER_ROW ? Color.LIGHT_GRAY : "transparent"};
  border-left-color: transparent;
  border-bottom-color: ${({ counter }) =>
    counter >= CELLS_PER_ROW * HOURS_PER_DAY - DAYS_PER_WEEK
      ? "transparent"
      : Color.LIGHT_GRAY};
  border-right-color: ${Color.LIGHT_GRAY};
  background-color: ${({ isChecked, isActive }) => {
    return isChecked
      ? Color.LIGHT_PURPLE
      : isActive
      ? Color.PURPLE
      : "transparent";
  }};
  cursor: ${({ isActive }) => (isActive ? "cursor" : "pointer")};
  transition: all 0.3s ease;

  &[disabled] {
    background-color: ${Color.PURPLE};
    pointer-events: none;
  }

  &:hover {
    background-color: ${Color.LIGHT_PURPLE};
  }

  &:active {
    background-color: ${Color.PURPLE};
  }
`;

export const CalendarFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
  padding: 0 8%;
  font-size: 34px;
  color: ${Color.RED};
  background-color: ${Color.GRAY};
  border-top: 1px solid ${Color.LIGHT_GRAY};
`;

export const FooterButton = styled.button`
  cursor: pointer;
  transition: all 0.3s ease;

  :hover,
  :active {
    color: ${Color.BLACK};
  }

  :disabled {
    color: ${Color.LIGHT_GRAY};
    cursor: not-allowed;
  }
`;

export const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
