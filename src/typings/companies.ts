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
  property: string
}

export type Company = {
  id: string
  name: string
  segment: CompanySegment
  contract: string
  renewals: number
  nps: {
    avg: number
    last: number
    first: number
  }
}
