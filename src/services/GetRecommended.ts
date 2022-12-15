import axios, {AxiosError} from 'axios';
import {IRecommended, IRecommendedItems} from "@/types/recommended.interface";

axios.defaults.baseURL = `https://api.hh.ru/`
export class GetRecommended {

  _basePage = 0

  async getData(id: any, per_page: number, page = this._basePage) {
    try {
      const response = await axios.get(`vacancies/${id}/similar_vacancies`, {
        params: {
          page,
          per_page
        }
      })

      return <IRecommended> {
        found: response.data.found,
        items: response.data.items.map(this._transformData)
      }
    } catch (e: any) {
      throw new Error(`Произошла ошибка ${e.message}`)
    }
  }

  _transformData = (data: IRecommendedItems) => {
    return {
      name: data.name,
      url: data.alternate_url,
      id: data.id,
      salaryFrom: data.salary?.from,
      salaryTo: data.salary?.to,
      area: data.area?.name,
      areaId: data.area?.id,
      requirement: data.snippet?.requirement,
      responsibility: data.snippet?.responsibility,
      schedule: data.schedule?.name,
      scheduleId: data.schedule?.id
    }
  }
}
