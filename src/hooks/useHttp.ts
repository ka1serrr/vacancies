import { useTypedSelector } from '@/imports/hooks';
import axios from 'axios';

axios.defaults.baseURL = `https://api.hh.ru/`;

interface IGetVacancies {
  page: number;
  onPage?: number;
}

export const useHttp = () => {
  const { perPage } = useTypedSelector((state) => state.pagination);

  const getVacancies = async (url: string, { page }: IGetVacancies) => {
    try {
      const response = await axios.get(`vacancies/`, {
        params: {
          salary: 30000,
          currency: 'RUR',
          per_page: perPage,
          page,
        },
      });
    } catch (e) {}
  };
};
