export interface IVacancy {
  id: string;
  description: string;
  keySkills: IKeySkills[];
  schedule: ISchedule;
  experience: IExperience;
  area: IArea;
  alternate_url: string;
  employment: IEmployment;
  salary: ISalary;
  name: string;
  employer: IEmployer;
  workingDays: IWorkingDays;
  workingHours: IWorkingHours;
}

export interface ITransformedData {
  name: string;
  id: string;
  description: string;
  keySkills: IKeySkills['name'];
  experience: IExperience['name'];
  city: IAddress['city'];
  street: IAddress['street'];
  building: IAddress['building'];
  url: string;
  employment: IEmployment['name'];
  salaryFrom: ISalary['from'];
  salaryTo: ISalary['to'];
  currency: ISalary['currency'];
  companyLogo: IEmployer['logo_urls'];
  companyName: IEmployer['name'];
  companyTrusted: IEmployer['trusted'];
  companyUrl: IEmployer['alternate_url'];
  workingDats: IWorkingDays['name'];
  workingHours: IWorkingHours['name'];
  item?: any[];
}

interface IKeySkills {
  name: string;
  [key: string]: any;
}

interface ISchedule {
  id?: string;
  name: string;
}

interface IExperience {
  id: 'string';
  name: 'string';
}

interface IAddress {
  city: string;
  street: string;
  building: string;
}

interface IArea {
  id: number;
  name: string;
}

interface IEmployment {
  name: 'string';
}

interface ISalary {
  to?: any;
  from: number;
  currency: string;
}

interface IEmployer {
  logo_urls: ILogo;
  name: string;
  alternate_url: string;
  trusted: boolean;
}

interface ILogo {
  original: string;
  90: string;
  240: string;
}

interface IWorkingDays {
  id?: string;
  name: string;
}

interface IWorkingHours {
  id?: string;
  name: string;
}
