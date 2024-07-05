import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  id: string | null|undefined;
  userName: string | null|undefined;
  accessToken: string | null;
  isSignIn: boolean;
}

const initialState: LoginState = {
  id: null,
  userName: null,
  accessToken: null,
  isSignIn: false,
} 

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    storeData: (state, action: PayloadAction<LoginState>) => {
      const { id, userName, accessToken } = action.payload;
      state.id = id;
      state.userName = userName;
      state.accessToken = accessToken;
      state.isSignIn = false;
    },
    deleteData: () => {
     return initialState
    },
  },
});

export const { storeData, deleteData } = loginSlice.actions;
export default loginSlice.reducer;
