import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  currentMusic: [],
};
//db에서 데이터 가져옴
export const fetchMusic = createAsyncThunk("music/fetchMusic", async () => {
  const response = await axios.get("http://localhost:3001/list");
  return response.data;
});
// db에 데이터를 넣음
export const createMusic = createAsyncThunk(
  "music/createMusic",
  async (newMusic) => {
    const response = await axios.post("http://localhost:3001/list", newMusic);
    return response.data;
  }
);
export const postComment = createAsyncThunk(
  "music/postComment",
  async (newComment) => {
    const response = await axios.post("http://localhost:3001/list", newComment);
  }
);
export const toggleLike = createAsyncThunk(
  "music/toggleLike",
  async (list_id, like_status) => {
    const response = await axios.patch(`http://localhost:3001/list/${list_id}`, like_status=!like_status);
    console.log(response)
    return response.data
  }
);
//db내 데이터 삭제
export const deleteMusic = createAsyncThunk(
  "music/deleteMusic",
  async(list_id)=>{
    const response = await axios.delete(`http://localhost:3001/list/${list_id}`)
    return list_id
  }
)

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addMusic: (state, action) => {
      state.list.push(action.payload); //payload=객체
    },
    readMusic: (state, action) => {
      state.currentMusic = state.list.find(
        (music) => music.id === action.payload
      );
    },
    editMusic: () => {
      return;
    },
    delMusic: (state, action) => {
      state.list = state.list.filter((music)=>
      music.id !==action.payload)
    },
  },
  extraReducers: {
    [fetchMusic.pending]: (state, action) => {
      console.log('pending');
    },
    [fetchMusic.fulfilled]: (state, action) => {
      state.list = action.payload;
      console.log('fulfilled');
    },
    [fetchMusic.rejected]: (state, action) => {
      console.log('rejected')
    },
    [createMusic.fulfilled]: (state, action) => {
      state.list.push(action.payload);
    },
    //delete
    [deleteMusic.fulfilled]: (state, action) => 
      state.list.filter((list)=>list.id!==action.payload)
    ,
    [toggleLike.fulfilled]: (state, action)=>{
      state.list.filter((list)=>list.id===action.payload)
      console.log(state.list)
    },
  },
});
//https://velog.io/@kyungjune/reduxtoolkit과-thunk-기본개념-연습
export const { addMusic, readMusic, delMusic } = musicSlice.actions;
export default musicSlice.reducer;
