import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './api/authApi'
import  authSlice  from './services/authSlice'
// import { contactApi } from './api/contactApi'
// import  contactSlice  from './services/contactSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice,
    // [contactApi.reducerPath]: contactApi.reducer,
    // contactSlice: contactSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
    // contactApi.middleware
})

setupListeners(store.dispatch)