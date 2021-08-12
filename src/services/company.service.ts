// Application
import apiClient from './api_mock'
import { Company, CompanyResponse } from 'typings/companies'

export async function getCompanies(): Promise<Company[]> {
  // API Request with mocked API (check api_mock.ts)
  const response: CompanyResponse = await apiClient.get('/companies')
  const { data } = response

  return data
}
