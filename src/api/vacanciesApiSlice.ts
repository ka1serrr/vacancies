import {createApi, fakeBaseQuery, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {EndpointBuilder} from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {GetVacancies} from "@/services/GetVacancies";
import {IVacancies} from "@/types/vacancies.interface";
import {IVacancy} from "@/types/vacancy.interface";

const getVacancies = new GetVacancies;

export const vacanciesApi = createApi({
  reducerPath: 'vacancies',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getVacancies: builder.query<IVacancies, number>({
      queryFn: (page) => getVacancies.getData(page)
    })
  })
});