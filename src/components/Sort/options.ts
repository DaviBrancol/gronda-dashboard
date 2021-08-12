// Application
import { Option } from 'typings'
import { CompanySort } from 'typings/companies'

export const options: Option<CompanySort>[] = [
  {
    label: 'ID',
    value: {
      property: 'id',
      order: 'down',
    },
  },
  {
    label: 'Most Renewals',
    value: {
      property: 'renewals',
      order: 'down',
    },
  },
  {
    label: 'Best NPS avg',
    value: {
      property: 'npsAvg',
      order: 'up',
    },
  },
  {
    label: 'Worst NPS avg',
    value: {
      property: 'npsAvg',
      order: 'down',
    },
  },
]
