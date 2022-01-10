import { createSlice } from '@reduxjs/toolkit'

const buscetSlice =  createSlice({
    name: 'buscet',
    initialState: {
        itemsInBuscet: []
    },
    reducers: {
        setItemInBuscet: (state, action) => {
            state.itemsInBuscet.push(action.payload) 
        },
        deleteItemFromBuscet: (state, action) => {
            state.itemsInBuscet = state.itemsInBuscet.filter(food => food.id !== action.payload)
        }
    }
})

export const {setItemInBuscet, deleteItemFromBuscet} = buscetSlice.actions
export default buscetSlice.reducer