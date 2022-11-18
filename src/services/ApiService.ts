import axios from "axios";
import {IVacancies} from "../types/vacancies.interface";

axios.defaults.baseURL = `https://api.hh.ru/vacancies`;

interface IData {
    getData: any;
}


export class GetData implements IData {
    _basePage:number = 198;

    async getData(page = this._basePage) {
        const response = await axios.get(`?salary=30000&currency=RUR&per_page=5&page=${page}`)
        return response.data.items.map(this._transformData)
    }

    _transformData = (data: IVacancies) => {
        return {
            name: data.name,
            address: data.address?.name,
            id: data.id,
            company: data.employer.name,
            companyImg: data.employer?.logo_urls,
            web: data.alternate_url,
            form: data.schedule?.name,
            salaryFrom: data.salary?.from,
            salaryTo: data.salary?.to,
            responsibility: data.snippet?.responsibility,
            requirement: data.snippet?.requirement
        }
    }

}