import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MovieState {
  loading:boolean,
  error:any
  data:any
}
const key="ac0fbf77c3c9c3d7d53951719816f3e8"
const initialState: MovieState = {
    loading:false,
    error:"",
    data:[]
}
 export const getMovies=createAsyncThunk("movie",async()=>{
    try{
        return await fetch('https://api.themoviedb.ofg/3/discover/movie?api_key='+key)
        .then((res)=>res.json())
    }catch(error){
        console.error(error)
    }
})
export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder){
    return builder.addCase(getMovies.pending,(state)=>{
        state.loading = true;
    }),
    builder.addCase(getMovies.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading = false;
        state.error = null;
        state.data = action.payload;
    }),
    builder.addCase(getMovies.rejected,(state,action:PayloadAction<any>)=>{
        state.loading = false;
        state.error = action.payload;
        state.data = [];
    })
  }
})

// Action creators are generated for each case reducer function
export const { } = movieSlice.actions

export default movieSlice.reducer