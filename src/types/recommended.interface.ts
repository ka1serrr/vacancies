import {IArea, ISalary, ISchedule, ISnippet} from "@/types/vacancies.interface";

export interface IRecommended {
  found: number,
  items: IRecommendedItems[],
}

export interface IRecommendedItems {
  alternate_url: string,
  area: IRecommendedArea,
  employer: IEmployer,
  name: string,
  id: string,
  salary: ISalary,
  schedule: ISchedule,
  snippet: ISnippet
}

export interface IRecommendedData {
  name: string,
  alternate_url: string,
  id: string,
  salaryFrom: ISalary['from'],
  salaryTo: ISalary['to'],
  area: IRecommendedArea['name'],
  areaID?: IRecommendedArea['id'],
  requirement: ISnippet["requirement"],
  responsibility: ISnippet['responsibility'],
}

interface IRecommendedArea {
  id: string,
  name: string,
}

interface IEmployer {
  name: string,
  url: string,
}



