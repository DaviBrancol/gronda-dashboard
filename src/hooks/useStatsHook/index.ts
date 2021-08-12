// Application
import { useStatsContext } from 'context'
import { getStats } from 'services/stats.service'

export const useStatsHook = () => {
  const { state, operations } = useStatsContext()

  const fetchStats = async () => {
    const data = await getStats(state.filters)
    operations.setStats(data)
  }

  return {
    ...state,
    fetchStats,
    setFilter: operations.setFilters,
  }
}
