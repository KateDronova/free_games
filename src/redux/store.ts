import { configureStore } from "@reduxjs/toolkit";
import openedGamesReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    openedGames: openedGamesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
