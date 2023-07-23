import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { InitialData } from "@/types";

export interface SearchState {
  search: string;
  startupPokemon: InitialData[];
}

const initialState: SearchState = {
  search: "",
  startupPokemon: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setInitialData: (state, action: PayloadAction<InitialData[]>) => {
      state.startupPokemon = action.payload;
    },
  },
});

export const { setSearch, setInitialData } = searchSlice.actions;
export default searchSlice.reducer;
