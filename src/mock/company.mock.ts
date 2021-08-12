// Application
import { APIStatus } from 'typings'
import { CompanyResponse, CompanySegment } from 'typings/companies'

// Mocked response from 1 week.
export const mockCompanies: CompanyResponse = {
  data: [
    {
      id: '1',
      name: 'Apple',
      segment: CompanySegment.A,
      contract: 'Fulltime',
      npsAvg: 7,
      npsFirst: 5,
      npsLast: 10,
      renewals: 5,
    },
    {
      id: '2',
      name: 'Paypal',
      segment: CompanySegment.B,
      contract: 'Fulltime',
      npsAvg: 6,
      npsFirst: 6,
      npsLast: 7,
      renewals: 1,
    },
    {
      id: '3',
      name: 'Microsot',
      segment: CompanySegment.A,
      contract: 'Fulltime',
      npsAvg: 4,
      npsFirst: 8,
      npsLast: 2,
      renewals: 8,
    },
    {
      id: '4',
      name: 'Oculus',
      segment: CompanySegment.C,
      contract: 'Partial',
      npsAvg: 10,
      npsFirst: 10,
      npsLast: 10,
      renewals: 0,
    },
  ],
  status: APIStatus.SUCCESS,
}
