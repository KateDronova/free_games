import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameInterface } from '../interfaces/gameInterface';
import { RootState } from './store';

const initialState: GameInterface[] = [];

export const openedGameSlice = createSlice({
  name: 'openedGames',
  initialState,
  reducers: {
    tempSaveOpenedGameInfo: (state, action: PayloadAction<GameInterface>) => {
      const existingGame = state.find(game => game.id === action.payload.id);
      if (!existingGame) {
        return [...state, action.payload];
      }
    },
    // через 5 минут:
    removeOpenedGameInfo: (state) => {
      return state.slice(1);
    }
  }
});

export const { tempSaveOpenedGameInfo, removeOpenedGameInfo } = openedGameSlice.actions;
export const selectOpenedGames = (state: RootState) => state.openedGames;
export default openedGameSlice.reducer;
