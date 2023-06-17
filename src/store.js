import { configureStore } from "@reduxjs/toolkit";

import { calendarReducer } from "./features/calendar/calendar-slice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
  devTools: true,
});
