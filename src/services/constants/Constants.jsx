import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
const BaseURL = "http://localhost:5000/api/v1/";
export const BaseQuery = fetchBaseQuery({ baseUrl: BaseURL });
