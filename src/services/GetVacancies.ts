import axios from 'axios';
import { IVacancies } from '@/types/vacancies.interface';
import { useTypedSelector } from '@/imports/hooks';

axios.defaults.baseURL = `https://api.hh.ru/`;

interface IData {
  getData: unknown;
}

export class GetVacancies implements IData {
  async getData(page: number, per_page: number) {
    try {
      const response = await axios.get(`vacancies/`, {
        params: {
          salary: 30000,
          currency: 'RUR',
          per_page,
          page,
        },
      });
      return {
        data: response.data.items.map(this._transformData),
        found: response.data.found,
      };
    } catch (e) {
      throw new Error(`Произошла ошибка ${e.message}`);
    }
  }

  _transformData = (data: IVacancies) => {
    return {
      name: data.name,
      address: data.area?.name,
      id: data.id,
      company: data.employer.name,
      companyImg: data.employer?.logo_urls?.original,
      web: data.alternate_url,
      form: data.schedule?.name,
      salaryFrom: data.salary?.from,
      salaryTo: data.salary?.to,
      responsibility: data.snippet?.responsibility,
      requirement: data.snippet?.requirement,
    };
  };
}
