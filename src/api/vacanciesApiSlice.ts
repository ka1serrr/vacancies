import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetVacancies } from '@/services/GetVacancies';

const getVacancies = new GetVacancies();

interface IGetVacancies {
  page: number;
  perPage: number;
}

export const vacanciesApiSlice = createApi({
  reducerPath: 'vacancies',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.hh.ru/` }),
  endpoints: (builder) => ({
    getVacancies: builder.query({
      queryFn: async ({ page, perPage }: IGetVacancies) => {
        const response = await getVacancies.getData(page, perPage);
        return { data: response };
      },
    }),
  }),
});

export const { useGetVacanciesQuery } = vacanciesApiSlice;
