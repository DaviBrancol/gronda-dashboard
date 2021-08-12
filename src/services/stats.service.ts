// Application
import apiClient from './api_mock'
import { StatsFilter, StatsFilterRaw, StatsResponse, Stats } from 'typings/stats'

export async function getStats(filters: StatsFilter): Promise<Stats> {
  // Parsing Cammel case style to API Payload
  const payload: StatsFilterRaw = {
    time_unit: filters.timeUnit,
    time_unit_count: filters.timeUnitCount,
  }

  // API Request with mocked API (check api_mock.ts)
  const response: StatsResponse = await apiClient.post('/stats', payload)
  const { data } = response

  // Parsing API payload for cammel case style
  return {
    activeSource: {
      currentPeriod: data.active_source.current_period,
      lastPeriod: data.active_source.last_period,
    },
    weeklyActive: {
      currentPeriod: data.weekly_active.current_period,
      lastPeriod: data.weekly_active.last_period,
    },
    nps: {
      currentPeriod: data.nps.current_period,
      lastPeriod: data.nps.last_period,
    },
  }
}
