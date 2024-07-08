import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/loginslice';
import todoReducer from './features/todoSlice';
import createSagaMiddleware from 'redux-saga';
import mySaga from './features/saga';
const PLACEHOLDER_NAME = '*****';
const sagaMiddleware = createSagaMiddleware()

const storeDataLogin = configureStore({
  reducer: {
    login:loginReducer,
    todo:todoReducer
   
  },  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(mySaga);
export type RootState = ReturnType<typeof storeDataLogin.getState>;
export type AppDispatch = typeof storeDataLogin.dispatch
export default storeDataLogin

