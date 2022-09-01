import axios from "axios";
const URL = "https://duxmusic.herokuapp.com/list";
const instance = axios.create({ baseURL: URL });
export const getItems = async (page, limit) => {
  const response = await instance.get(`/?_page=${page}&_limit=${limit}`);
  return response.data;
};
