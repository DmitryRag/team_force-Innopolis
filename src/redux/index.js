import { configureStore } from '@reduxjs/toolkit'
import buscetReducer from './bascet/reducer'

export const store= configureStore({
    reducer: {
        buscet: buscetReducer,
    },
})