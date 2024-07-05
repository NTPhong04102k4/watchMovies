import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/StoreInforLogin';
const storeDataLogin = configureStore({
  reducer: {
    login:loginReducer
  },
})
export type RootState = ReturnType<typeof storeDataLogin.getState>;
export type AppDispatch = typeof storeDataLogin.dispatch
export default storeDataLogin

