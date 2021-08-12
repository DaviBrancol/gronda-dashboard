// Application
import { APIStatus } from 'typings'
import { StatsResponse } from 'typings/stats'

// Mocked response from 1 week.
export const mockWeek: StatsResponse = {
  data: {
    active_source: {
      current_period: 30,
      last_period: 15,
    },
    weekly_active: {
      current_period: 35,
      last_period: 16,
    },
    nps: {
      current_period: 40,
      last_period: 20,
    },
  },
  status: APIStatus.SUCCESS,
}

// Mocked response from 1 month.
export const mockMonth: StatsResponse = {
  data: {
    active_source: {
      current_period: 60,
      last_period: 30,
    },
    weekly_active: {
      current_period: 70,
      last_period: 35,
    },
    nps: {
      current_period: 80,
      last_period: 40,
    },
  },
  status: APIStatus.SUCCESS,
}

// Mocked response from 1 quarter.
export const mockQuarter: StatsResponse = {
  data: {
    active_source: {
      current_period: 120,
      last_period: 60,
    },
    weekly_active: {
      current_period: 140,
      last_period: 70,
    },
    nps: {
      current_period: 160,
      last_period: 80,
    },
  },
  status: APIStatus.SUCCESS,
}

// Mocked response from 1 year.
export const mockYear: StatsResponse = {
  data: {
    active_source: {
      current_period: 240,
      last_period: 120,
    },
    weekly_active: {
      current_period: 280,
      last_period: 140,
    },
    nps: {
      current_period: 320,
      last_period: 160,
    },
  },
  status: APIStatus.SUCCESS,
}
