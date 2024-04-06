'use client'
import React from "react"
import { Provider } from "react-redux"
import {store} from './store'
import { useDispatch } from "react-redux"
import { setBasket } from "./slices/basketSlice"

export function ReduxProvider ({children}: Record<'children', React.ReactElement>) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}