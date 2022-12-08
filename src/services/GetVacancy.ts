import axios from "axios";
import {IVacancy} from "../types/vacancy.interface";

axios.defaults.baseURL = `https://api.hh.ru/`;

export class GetVacancy {

  async getVacancy(id: any) {
    const response = await axios.get(`vacancies/${id}`)
    return this._transformData(response.data)
  }

  _transformData = (data: IVacancy) => {
    return {
      name: data.name,
      id: data.id,
      description: data?.description,
      keySkills: data?.keySkills,
      schedule: data.schedule?.name,
      experience: data?.experience,
      city: data.address?.city,
      street: data.address?.street,
      building: data.address?.building,
      url: data.alternate_url,
      employment: data.employment,
      salaryFrom: data.salary?.from,
      salaryTo: data.salary?.to,
      currency: data.salary?.currency,
      companyLogo: data.employer?.logo_urls?.original,
      companyName: data.employer.name,
      companyTrusted: data.employer?.trusted,
      companyUrl: data.employer?.url,
      workingDays: data.workingDays?.name,
      workingHours: data.workingHours?.name
    }
  }
}