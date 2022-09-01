import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const COMMENT_URL = "http://localhost:3001/comment";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk(
  "comment/GET_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const {data} = await axios.get(COMMENT_URL);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "comment/ADD_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const {data} = await axios.post(COMMENT_URL, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "comment/UPDATE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        COMMENT_URL+'/'+payload.id,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comment/DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(COMMENT_URL+'/'+payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // __getComment Thunk
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.comments = action.payload; // Store에 있는 list에 서버에서 가져온 music를 넣음
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
    },

    // __addComment Thunk
    [__addComment.pending]: (state) => {
      state.isLoading = true; 
    },
    [__addComment.fulfilled]: (state, action) => {
      state.comments.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false; 
      state.error = action.payload;
    },
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((music) =>
        music.id === action.payload.id ? { ...action.payload } : music
      );
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  
});

export default comments.reducer;