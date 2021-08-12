// Application
import { Option } from 'typings'
import { StatsFilter, StatsTime } from 'typings/stats'

export const options: Option<StatsFilter>[] = [
  {
    label: 'This month',
    value: {
      timeUnit: StatsTime.MONTH,
      timeUnitCount: 0,
    },
  },
  {
    label: 'Last month',
    value: {
      timeUnit: StatsTime.MONTH,
      timeUnitCount: 1,
    },
  },
  {
    label: 'This quarter',
    value: {
      timeUnit: StatsTime.QUARTER,
      timeUnitCount: 0,
    },
  },
  {
    label: 'Last quarter',
    value: {
      timeUnit: StatsTime.QUARTER,
      timeUnitCount: 1,
    },
  },
  {
    label: 'This year',
    value: {
      timeUnit: StatsTime.YEAR,
      timeUnitCount: 0,
    },
  },
  {
    label: 'Last year',
    value: {
      timeUnit: StatsTime.YEAR,
      timeUnitCount: 1,
    },
  },
]
