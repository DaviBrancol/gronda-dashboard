// Application
import { Company, CompanySort } from 'typings/companies'

interface Props {
  data: Company[]
  sort: CompanySort
  isCritical: boolean
}

export const CompanyTable: React.VFC<Props> = ({ data, sort, isCritical }) => {
  const sortCriteria = (a: Company, b: Company) => {
    if (sort.order === 'down') {
      return a[sort.property as string] - b[sort.property as string]
    }
    return b[sort.property as string] - a[sort.property as string]
  }

  return (
    <table className="w-full text-center mt-10">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-4">ID</th>
          <th>Company Name</th>
          <th>Segment</th>
          <th>Contract</th>
          <th>Renewals</th>
          <th>NPS avg</th>
          <th>NPS last</th>
          <th>NPS first</th>
        </tr>
      </thead>
      <tbody>
        {data.sort(sortCriteria).map((item) => (
          <tr className="border-b border-gray-300" key={item.id}>
            <td className="py-4">{item.id}</td>
            <td>{item.name}</td>
            <td>{item.segment}</td>
            <td>{item.contract}</td>
            <td>{item.renewals}</td>
            <td>{item.npsAvg}</td>
            <td>{item.npsLast}</td>
            <td>{item.npsFirst}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
