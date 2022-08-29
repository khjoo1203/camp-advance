import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  currentMusic: [],
};
//db에서 데이터 가져옴
export const __fetchMusic = createAsyncThunk(
  "music/fetchMusic",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/list");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// db에 데이터를 넣음
export const __createMusic = createAsyncThunk(
  "music/createMusic",
  async (newMusic) => {
    const response = await axios.post("http://localhost:3001/list", newMusic);
    return response.data;
  }
);
export const __postComment = createAsyncThunk(
  "music/postComment",
  async (newComment) => {
    const response = await axios.post("http://localhost:3001/list", newComment);
  }
);
//좋아요 토글
export const __toggleLike = createAsyncThunk(
  "music/toggleLike",
  async (list_id, like_status) => {
    const response = await axios.patch(
      `http://localhost:3001/list/${list_id}`,
      like_status
    );
    return response.data;
  }
);
//db내 데이터 삭제
export const __deleteMusic = createAsyncThunk(
  "music/deleteMusic",
  async (list_id) => {
    const response = await axios.delete(
      `http://localhost:3001/list/${list_id}`
    );
    return list_id;
  }
);

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
      state.list = state.list.filter((music) => music.id !== action.payload);
    },
  },
  extraReducers: {
    [__fetchMusic.pending]: (state, action) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
      console.log(state.isLoading);
      console.log("pending");
    },
    [__fetchMusic.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.list = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣음
      console.log("fulfilled", state, action);
    },
    [__fetchMusic.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
      console.log("rejected");
    },
    [__createMusic.fulfilled]: (state, action) => {
      state.list.push(action.payload);
    },
    //delete
    [__deleteMusic.fulfilled]: (state, action) =>
      state.list.filter((list) => list.id !== action.payload),
    [__toggleLike.fulfilled]: (state, action) => {
      state.list.filter((list) => list.id !== action.payload);
    },
  },
});
export const { addMusic, readMusic, delMusic } = musicSlice.actions;
export default musicSlice.reducer;
