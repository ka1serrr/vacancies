export interface IVacancies {
    name: string,
    alternate_url: string,
    id: any,
    area: IArea,
    employer: IEmployer
    schedule?: ISchedule,
    salary?: ISalary,
    snippet?: ISnippet
}
export interface ITransformedData {
    name: IVacancies['name'],
    address: IVacancies['area'],
    company: IEmployer['name'],
    companyImg: IEmployer['logo_urls'],
    web: IVacancies['alternate_url'],
    form: ISchedule['name'],
    salaryFrom: ISalary['from'],
    salaryTo: ISalary['to'],
    responsibility: ISnippet["responsibility"],
    requirement: ISnippet['requirement'],
    id: IVacancies['id'],
}

export interface IData extends ITransformedData {
    [key: string]: any

}

export interface IArea {
    name: string,
}

export interface IEmployer {
    name: string,
    url?: string,
    logo_urls: ILogoUrls;
}

export interface ILogoUrls {
    original?: string | '';
}

export interface ISchedule {
    name: string,
    id?: string,
}

export interface ISalary {
    from: number,
    to?: any,
    currency: string
}
export interface ISnippet {
    responsibility: string,
    requirement: string
}