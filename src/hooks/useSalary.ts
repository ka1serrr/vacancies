
export const useSalary = (salaryFrom: any, salaryTo: any ) => {
  return salaryFrom && salaryTo ? `з/п от ${salaryFrom} до ${salaryTo} рублей` : salaryFrom && salaryTo == undefined ? `з/п от ${salaryFrom} рублей` : salaryFrom == undefined && salaryTo ? `з/п до ${salaryTo} рублей` : 'з/п не указана'
}