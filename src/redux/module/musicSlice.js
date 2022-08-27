import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
  ],
};

//db에서 데이터 가져옴
export const fetchMusic = createAsyncThunk("music/fetchMusic", async () => {
  const response = await axios.get("http://localhost:5001/list")
  return response.data
});

// db에 데이터를 넣음
export const createMusic = createAsyncThunk("music/createMusic", async (newMusic) => {
  const response = await axios.post('http://localhost:5001/list',newMusic)
  return response.data
})

export const postComment = createAsyncThunk("music/postComment", async (newComment) => {
  const response = await axios.post('http://localhost:5001/list',newComment)
})
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addMusic: (state, action) => {
      state.list.push(action.payload); //payload=객체
    },
    editMusic: () => {
      return;
    },
    deleteMusic: () => {
      return;
    },
  },
  extraReducers: {
    [fetchMusic.fulfilled]:(state, action)=>{
      state.list = state.list.concat(action.payload)
    },
    [createMusic.fulfilled]:(state, action)=>{
      state.list.push(action.payload)
    },
  }
});

export const { addMusic } = musicSlice.actions;
export default musicSlice.reducer;
