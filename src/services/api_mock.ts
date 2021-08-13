/* eslint-disable @typescript-eslint/no-explicit-any */

// Application
import { StatsFilterRaw, StatsResponse, StatsTime } from 'typings/stats'
import {
  mockWeek,
  mockFirstMonth,
  mockLastMonth,
  mockFirstQuarter,
  mockLastQuarter,
  mockFirstYear,
  mockLastYear,
} from 'mock/stats.mock'

import { CompanyResponse } from 'typings/companies'
import { mockCompanies } from 'mock/company.mock'

async function get(path: string): Promise<CompanyResponse> {
  if (path === '/companies') {
    return mockCompanies
  }
  return null
}

async function post(path: string, payload: any): Promise<StatsResponse | null> {
  if (path === '/stats') {
    const data = payload as StatsFilterRaw
    if (data.time_unit === StatsTime.WEEK) {
      return mockWeek
    } else if (data.time_unit === StatsTime.MONTH) {
      return data.time_unit_count === 1 ? mockFirstMonth : mockLastMonth
    } else if (data.time_unit === StatsTime.QUARTER) {
      return data.time_unit_count === 1 ? mockFirstQuarter : mockLastQuarter
    } else {
      return data.time_unit_count === 1 ? mockFirstYear : mockLastYear
    }
  }
  return null
}

export default { get, post }
