import { configureStore } from "@reduxjs/toolkit";
import newsSlice from './newsSlice'

export default configureStore( 
    {
        reducer: {
            everything: newsSlice
        },
    }
)