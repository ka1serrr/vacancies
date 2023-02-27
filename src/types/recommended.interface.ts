import { ISalary, ISchedule, ISnippet } from '@/types/vacancies.interface';

export interface IRecommended {
  found: number;
  items: IRecommendedItems[];
}

export interface IRecommendedItems {
  alternate_url: string;
  area: IRecommendedArea;
  employer: IEmployer;
  name: string;
  id: string;
  salary: ISalary;
  schedule: ISchedule;
  snippet: ISnippet;
}

export interface IRecommendedData {
  name: string;
  url: string;
  id: string | undefined;
  salaryFrom: ISalary['from'];
  salaryTo: ISalary['to'];
  area: IRecommendedArea['name'];
  cityId: IRecommendedArea['id'];
  requirement: ISnippet['requirement'];
  responsibility: ISnippet['responsibility'];
}

interface IRecommendedArea {
  id: string;
  name: string;
}

interface IEmployer {
  name: string;
  url: string;
}
