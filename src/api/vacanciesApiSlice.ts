import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetVacancies } from '@/services/GetVacancies';

const getVacancies = new GetVacancies();

export const vacanciesApiSlice = createApi({
  reducerPath: 'vacancies',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.hh.ru/` }),
  endpoints: (builder) => ({
    getVacancies: builder.query({
      queryFn: async (page: number = 198) => {
        const response = await getVacancies.getData(page);
        return { data: await response };
      },
    }),
  }),
});

export const { useGetVacanciesQuery } = vacanciesApiSlice;
