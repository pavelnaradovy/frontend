import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import authSaga from "./features/auth-saga";


const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: { auth:authReducer },
  middleware: [saga],
  devTools: process.env.NODE_ENV !== 'production',
});

saga.run(authSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector