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
      nps: {
        avg: 7,
        first: 5,
        last: 10,
      },
      renewals: 5,
    },
    {
      id: '2',
      name: 'Microsot',
      segment: CompanySegment.A,
      contract: 'Fulltime',
      nps: {
        avg: 4,
        first: 8,
        last: 2,
      },
      renewals: 8,
    },
    {
      id: '4',
      name: 'Paypal',
      segment: CompanySegment.B,
      contract: 'Fulltime',
      nps: {
        avg: 6,
        first: 6,
        last: 7,
      },
      renewals: 1,
    },
    {
      id: '5',
      name: 'Oculus',
      segment: CompanySegment.C,
      contract: 'Partial',
      nps: {
        avg: 10,
        first: 10,
        last: 10,
      },
      renewals: 0,
    },
  ],
  status: APIStatus.SUCCESS,
}
