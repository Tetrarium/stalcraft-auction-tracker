import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface AppSettings {
  lotNotification: boolean;
}

const initialState: AppSettings = {
  lotNotification: false,
};

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    setLotNotification: (state, action: PayloadAction<boolean>) => {
      state.lotNotification = action.payload;
    }
  }
});

export const { setLotNotification } = appSettingsSlice.actions;
export default appSettingsSlice.reducer;