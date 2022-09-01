import axios from "axios";
const URL = "http://localhost:3001/list";
const instance = axios.create({ baseURL: URL });
export const getItems = async (page, limit) => {
  const response = await instance.get(`/?_page=${page}&_limit=${limit}`);
  return response.data;
};
