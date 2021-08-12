/* eslint-disable @typescript-eslint/no-explicit-any */

// Application
import { StatsFilterRaw, StatsResponse, StatsTime } from 'typings/stats'
import { mockMonth, mockQuarter, mockWeek, mockYear } from 'mock/stats.mock'

async function post(path: string, payload: any): Promise<StatsResponse | null> {
  if (path === '/stats') {
    const data = payload as StatsFilterRaw
    if (data.time_unit === StatsTime.WEEK) {
      return mockWeek
    } else if (data.time_unit === StatsTime.MONTH) {
      return mockMonth
    } else if (data.time_unit === StatsTime.QUARTER) {
      return mockQuarter
    } else {
      return mockYear
    }
  }
  return null
}

export default { post }
