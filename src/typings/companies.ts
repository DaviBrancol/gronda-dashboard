// Application
import { APIStatus } from 'typings'

export enum CompanySegment {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export type CompanyResponse = {
  data: Company[]
  status: APIStatus
}

export type CompanySort = {
  property: CompanyProperty
  order: 'up' | 'down'
}

export type Company = {
  id: string
  name: string
  segment: CompanySegment
  contract: string
  renewals: number
  npsAvg: number
  npsLast: number
  npsFirst: number
}

export type CompanyProperty = keyof Company
