export interface IVacancies {
    name: string,
    alternate_url: string,
    id: any,
    address: IArea,
    employer: IEmployer
    schedule: ISchedule,
    salary: ISalary,
    snippet: ISnippet
}

export interface IArea {
    name: string,
}

export interface IEmployer {
    name: string,
    url?: string,
    logo_urls?: ILogoUrls;
}

export interface ILogoUrls {
    90?: string;
    240?: string;
    original?: string;
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