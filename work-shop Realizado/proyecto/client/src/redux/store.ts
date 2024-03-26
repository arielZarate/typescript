// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feactures/slicesUser'
export const store = configureStore({
    reducer: {
        // Aquí añadirás tus reducers
        userReducer:userReducer
    },
});

// Inferir el `RootState` y el `AppDispatch` types del store mismo
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
