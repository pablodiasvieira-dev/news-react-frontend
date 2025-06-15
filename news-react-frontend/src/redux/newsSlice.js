import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNews, getNewsFilter } from "../api/api";

export const getNewsAsync = createAsyncThunk(
    "everything/getNewsAsync",
    async (payload, thunkAPI) => {
        return await getNews()
    }
)
export const getNewsFilterAsync = createAsyncThunk(
    "everything/getNewsFilterAsync",
    async (payload, thunkAPI) => {
        const {pais, categoria} = payload
        return await getNewsFilter(pais, categoria)
    }
)

const initialState = {
    noticias: [],
    filtros: {
        pais: '',
        categoria: ''
    }
}

export const newsSlice = createSlice({
    name: "everything",
    initialState: initialState,
    reducers: {
        setFiltros: (state, action) => {
            state.filtros = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNewsAsync.fulfilled, (state, action) => {
            state.noticias = action.payload
        });
        builder.addCase( getNewsFilterAsync.fulfilled, (state, action) => {
            state.noticias = action.payload
        })
    }
})

export const { setFiltros } = newsSlice.actions;
export default newsSlice.reducer;