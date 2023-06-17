import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

import { EVENT_KEY_FORMAT } from "../../consts";

const initialState = {
  weeksCounter: 0,
  events: {},
};

const calendarSlice = createSlice({
  name: "@@calendar",
  initialState,
  reducers: {
    updateWeeksCounter: (state, action) => {
      const isNext = action.payload;

      if (isNext) {
        state.weeksCounter += 1;
      } else {
        state.weeksCounter -= 1;
      }
    },
    resetWeeksCounter: (state, _action) => {
      state.weeksCounter = 0;
    },
    addEvent: (state, action) => {
      const date = action.payload;
      const key = moment(date).format(EVENT_KEY_FORMAT);

      state.events[key] = { isActive: false, date };
    },
    selectEvent: (state, action) => {
      const key = action.payload;
      const { events } = state;

      Object.keys(events).forEach((eventKey) => {
        if (events[eventKey]) {
          events[eventKey].isActive = false;
        }
      });

      events[key].isActive = true;
    },
    removeEvent: (state, _action) => {
      const { events } = state;

      state.events = Object.keys(events)
        .filter((key) => !events[key].isActive)
        .reduce((acc, key) => {
          acc[key] = events[key];
          return acc;
        }, {});
    },
  },
});

export const {
  updateWeeksCounter,
  resetWeeksCounter,
  addEvent,
  selectEvent,
  removeEvent,
} = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;

// selectors
export const selectWeeksCounter = (state) => state.calendar.weeksCounter;
export const selectEvents = (state) => state.calendar.events;
