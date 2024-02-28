import { request, URL } from "./request";
import { useFetch } from "../hooks";
const BASE_URL = URL.current + "/api";

export const fetchUser = () => {
  const url = `${BASE_URL}/users`;
  return useFetch(request, url);
};
