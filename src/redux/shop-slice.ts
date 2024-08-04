import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../ts/types';
import database from '../database.json';
import { findProduct } from '../ts/data';

interface InitialState {
  productList: Item[];
  searchValue: string;
  currentBrand: string[];
  favoritesList: Item[];
}

const initialState: InitialState = {
  productList: database,
  searchValue: '',
  currentBrand: [],
  favoritesList: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setCurrentBrand(state, action: PayloadAction<string>) {
      if (state.currentBrand.includes(action.payload)) {
        state.currentBrand = state.currentBrand.filter(
          (item) => item !== action.payload
        );
      } else {
        state.currentBrand.push(action.payload);
      }
    },

    sortingByBrands(state) {
      const filteredList: Item[] = [];

      if (state.currentBrand.length > 0) {
        state.currentBrand.forEach((brand) =>
          filteredList.push(
            ...database.filter(
              (item) =>
                item.data.brandRootInfo.brandItemList[0].brandName === brand
            )
          )
        );

        state.productList = filteredList;
      } else {
        state.productList = database;
      }
    },

    addToFavorites(state, action: PayloadAction<Item>) {
      const product = findProduct(
        state.favoritesList,
        action.payload.data.detail.spuId
      );

      if (!product) {
        state.favoritesList.push(action.payload);
      } else {
        state.favoritesList = state.favoritesList.filter(
          (item) => item.data.detail.spuId !== action.payload.data.detail.spuId
        );
      }
    },
  },
});

export const { setSearchValue, setCurrentBrand, sortingByBrands, addToFavorites } =
  shopSlice.actions;

export default shopSlice.reducer;
