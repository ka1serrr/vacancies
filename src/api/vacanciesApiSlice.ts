import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetVacancies } from '@/services/GetVacancies';
import { IVacancies } from '@/types/vacancies.interface';

const getVacancies = new GetVacancies;

export const vacanciesApi = createApi({
  reducerPath: 'vacancies',
  baseQuery: fetchBaseQuery({baseUrl: `https://api.hh.ru/`}),
  endpoints: builder => ({
    getVacancies: builder.query<IVacancies, number>({
      queryFn: async (page = 198) => {
        const response = await getVacancies.getData(page)
        return {data: await response}
      },
    }),
  }),
});

export const { useGetVacanciesQuery } = vacanciesApi;