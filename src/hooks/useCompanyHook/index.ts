// Application
import { useCompanyContext } from 'context'
import { getCompanies } from 'services/company.service'

export const useCompanyHook = () => {
  const { state, operations } = useCompanyContext()

  const fetchStats = async () => {
    const data = await getCompanies()
    operations.setCompanies(data)
  }

  return {
    ...state,
    data: state.companies,
    fetchStats,
    setSort: operations.setSort,
    setCritical: operations.setCritical,
  }
}
