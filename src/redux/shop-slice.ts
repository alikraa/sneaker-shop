import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../ts/types';
import database from '../database.json';

interface InitialState {
  productList: Item[];
  searchValue: string;
}

const initialState: InitialState = {
  productList: database,
  searchValue: '',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = shopSlice.actions;

export default shopSlice.reducer;



