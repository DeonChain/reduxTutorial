import { configureStore } from '@reduxjs/toolkit'
import newuserReducer from './reducers/index'

export default configureStore({
    reducer:{
        user: newuserReducer
    }
})

