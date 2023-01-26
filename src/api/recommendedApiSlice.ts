import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recommendedApiSlice = createApi({
  reducerPath: 'recommended',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.hh.ru/` }),
});