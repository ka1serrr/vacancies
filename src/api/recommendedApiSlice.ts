import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetRecommended } from '@/services/GetRecommended';

const getRecommended = new GetRecommended();

interface IGetRecommended {
  perPage: number;
  page?: number;
  id: unknown;
  area?: number;
}

export const recommendedApiSlice = createApi({
  reducerPath: 'recommended',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.hh.ru/` }),
  endpoints: (builder) => ({
    getRecommended: builder.query({
      queryFn: async ({ id, perPage, page, area }: IGetRecommended) => {
        const response = await getRecommended.getData(id, perPage, page, area);
        return { data: response };
      },
    }),
  }),
});

export const { useGetRecommendedQuery } = recommendedApiSlice;
