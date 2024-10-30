import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";
const baseAxios = axios.create({ baseURL });

baseAxios.interceptors.request.use(
  (config) => {
    const configCopy = { ...config };
    return configCopy;
  },
  (error) => Promise.reject(error)
);

export default baseAxios;
