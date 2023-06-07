import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
const BaseURL = "https://colabs-backend.vercel.app/api/v1/";
export const BaseQuery = fetchBaseQuery({ baseUrl: BaseURL });
