import { useTypedSelector } from '@/imports/hooks';
import axios from 'axios';

axios.defaults.baseURL = `https://api.hh.ru/`;

export const useHttp = () => {
  const { perPage } = useTypedSelector((state) => state.pagination);

  const getVacancies = async (url: string, { perPage: number = perPage }) => {
    try {
    } catch (e) {}
  };
};
