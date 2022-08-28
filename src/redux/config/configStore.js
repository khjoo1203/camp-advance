import { configureStore } from "@reduxjs/toolkit";

  import musicReducer from '../module/musicSlice'


const store = configureStore({
  reducer:{music:musicReducer}
})

export default store