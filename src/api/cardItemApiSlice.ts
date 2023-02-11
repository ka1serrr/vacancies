import { GetVacancy } from '@/services/GetVacancy';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getVacancy = new GetVacancy();

export const vacancyApiSlice = createApi({
  reducerPath: 'vacancy',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.hh.ru/` }),
  endpoints: (builder) => ({
    getVacancy: builder.query({
      queryFn: async (id: unknown) => {
        const response = await getVacancy.getVacancy(id);
        return { data: response };
      },
    }),
  }),
});

export const { useGetVacancyQuery } = vacancyApiSlice;
