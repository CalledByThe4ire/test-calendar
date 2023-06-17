import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import {
  resetWeeksCounter,
  selectWeeksCounter,
  updateWeeksCounter,
  addEvent,
  selectEvent,
  removeEvent,
  selectEvents,
} from "./calendar-slice";
import {
  CalendarWrapper,
  CalendarHeader,
  TitleWrapper,
  Title,
  TitleButton,
  WeekDaysWrapper,
  WeekDaysList,
  WeekDay,
  Day,
  WeekDaysControls,
  ControlButton,
  Date,
  CalendarBodyWrapper,
  CalendarBody,
  CalendarFooter,
  FooterButton,
  VisuallyHidden,
  Cell,
  Time,
  EventCell,
} from "./styles";
import {
  DAYS_PER_WEEK,
  HOURS_PER_DAY,
  CELLS_PER_ROW,
  DATE_FORMAT,
  DATETIME_FORMAT,
  EVENT_KEY_FORMAT,
} from "../../consts";

function Calendar() {
  const dispatch = useDispatch();
  const weeksCounter = useSelector(selectWeeksCounter);
  const events = useSelector(selectEvents);
  const currentDate = moment();

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <TitleWrapper>
          <Title>Interview Calendar</Title>
          <TitleButton
            onClick={() => {
              const date = prompt(`Enter event time: (${DATETIME_FORMAT})`);
              if (!date) {
                alert(`No event time provided`);
                return;
              }

              const checkedDate = moment(date, DATETIME_FORMAT, true);
              if (!checkedDate.isValid()) {
                alert(`Error! Invalid format`);
                return;
              }

              dispatch(addEvent(checkedDate.valueOf()));
              alert("Success! Event time has been added");
            }}
          >
            <VisuallyHidden>Add event</VisuallyHidden>
          </TitleButton>
        </TitleWrapper>
        <WeekDaysWrapper>
          <WeekDaysList>
            <WeekDay>S</WeekDay>
            <WeekDay>M</WeekDay>
            <WeekDay>T</WeekDay>
            <WeekDay>W</WeekDay>
            <WeekDay>T</WeekDay>
            <WeekDay>F</WeekDay>
            <WeekDay>S</WeekDay>
          </WeekDaysList>
          <WeekDaysList>
            {Array.from({ length: DAYS_PER_WEEK }, (_, i) => i)
              .map((i) =>
                currentDate.clone().add(weeksCounter, "weeks").add(i, "days")
              )
              .map((day, i) => (
                <Day key={i} isCurrentDate={currentDate.isSame(day, "day")}>
                  {day.format("D")}
                </Day>
              ))}
          </WeekDaysList>
          <WeekDaysControls>
            <ControlButton onClick={() => dispatch(updateWeeksCounter())}>
              <VisuallyHidden>Previous week</VisuallyHidden>
            </ControlButton>
            <Date>{currentDate.clone().format(DATE_FORMAT)}</Date>
            <ControlButton onClick={() => dispatch(updateWeeksCounter(true))}>
              <VisuallyHidden>Next week</VisuallyHidden>
            </ControlButton>
          </WeekDaysControls>
        </WeekDaysWrapper>
      </CalendarHeader>
      <CalendarBodyWrapper>
        <CalendarBody>
          {Array.from(
            { length: CELLS_PER_ROW * HOURS_PER_DAY },
            (_, i) => i
          ).map((_, i) => {
            if (i % CELLS_PER_ROW === 0) {
              const hour = i / CELLS_PER_ROW;

              return (
                <Cell key={i}>
                  <Time>
                    {`${hour}`.padStart(2, "0")}
                    {":".padEnd(3, "0")}
                  </Time>
                </Cell>
              );
            }

            const dateTime = currentDate
              .clone()
              .hours(0)
              .minutes(0)
              .add(weeksCounter, "weeks")
              .add((i - 1) % CELLS_PER_ROW, "days")
              .add(Math.trunc(i / CELLS_PER_ROW), "hours");

            const key = dateTime.format(EVENT_KEY_FORMAT);

            return (
              <EventCell
                key={i}
                counter={i}
                isChecked={!!events[key]}
                isActive={events[key]?.isActive}
                onClick={() => {
                  if (!events[key]) {
                    dispatch(addEvent(dateTime.valueOf()));
                  } else {
                    dispatch(selectEvent(key));
                  }
                }}
                disabled={events[key] && events[key].isActive}
              />
            );
          })}
        </CalendarBody>
      </CalendarBodyWrapper>
      <CalendarFooter>
        <FooterButton onClick={() => dispatch(resetWeeksCounter())}>
          Today
        </FooterButton>
        <FooterButton
          onClick={() => dispatch(removeEvent())}
          disabled={
            Object.keys(events).filter((key) => events[key].isActive).length ===
            0
          }
        >
          Delete
        </FooterButton>
      </CalendarFooter>
    </CalendarWrapper>
  );
}

export default Calendar;
