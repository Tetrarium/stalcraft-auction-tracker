import { IFilter } from "@/types/filter";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialFilter = {
  name: '',
  rarity: '',
  pattern: '',
  minProfit: '',
  minProfitPercent: '',
};

interface FilterState {
  filter: IFilter;
}

export const initialState: FilterState = {
  filter: initialFilter,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = initialFilter;
    }
  }
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;