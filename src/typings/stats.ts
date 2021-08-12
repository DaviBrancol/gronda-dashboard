/* eslint-disable camelcase */

// Application
import { APIStatus } from 'typings'

// Enums
export enum StatsTime {
  MONTH = 'MONTH',
  WEEK = 'WEEK',
  QUARTER = 'QUARTER',
  YEAR = 'YEAR',
}

// Raw API interfaces
export type StatsResponse = {
  data: {
    active_source: {
      current_period: number
      last_period: number
    }
    weekly_active: {
      current_period: number
      last_period: number
    }
    nps: {
      current_period: number
      last_period: number
    }
  }
  status: APIStatus
}

export type StatsFilterRaw = {
  time_unit: StatsTime
  time_unit_count: number
}

// Cammel case parsed payloads
export type Stats = {
  activeSource: {
    currentPeriod: number
    lastPeriod: number
  }
  weeklyActive: {
    currentPeriod: number
    lastPeriod: number
  }
  nps: {
    currentPeriod: number
    lastPeriod: number
  }
}

export type StatsFilter = {
  timeUnit: StatsTime
  timeUnitCount: number
}
