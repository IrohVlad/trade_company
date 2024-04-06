'use client'
import { createSlice } from "@reduxjs/toolkit"

export interface IBasketItem {
    id: string;
    name: string;
    price: number;
    image: string;
    amount: number;
}

export interface IBasketState {
    value: Array<IBasketItem>
}

const initialState: IBasketState = {
    value: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItems: (state, action)=>{
            const product = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                image: action.payload.image,
                amount: 1
            }
            if(state.value.length > 0){
                let alreadyExistIndex = state.value.findIndex((value)=>{
                    return value.id == product.id 
                })
                if(alreadyExistIndex >= 0){
                    state.value[alreadyExistIndex].amount += 1
                
                } else {
                    state.value = [...state.value, product]
                }
            } else {
                state.value = [...state.value, product]
                
            }
            localStorage.setItem('basket', JSON.stringify(state.value))

        },
        increase: (state, action) => {
            state.value[action.payload].amount += 1
            localStorage.setItem('basket', JSON.stringify(state.value))
        },
        decrease: (state, action) => {
            if(state.value[action.payload].amount > 1){
                state.value[action.payload].amount -= 1
            } else {
                state.value = [...state.value.slice(0, action.payload), ...state.value.slice(action.payload + 1)]
            }
            localStorage.setItem('basket', JSON.stringify(state.value))
        },
        remove: (state, action) => {
            state.value = [...state.value.slice(0, action.payload), ...state.value.slice(action.payload + 1)]
        },
        setBasket: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {addItems, setBasket, increase, decrease, remove} = basketSlice.actions
export default basketSlice.reducer
