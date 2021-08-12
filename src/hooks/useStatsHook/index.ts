// Application
import { useStatsContext } from 'context'
import { getStats } from 'services/stats.service'

export const useStatsHook = () => {
  const { state, operations } = useStatsContext()

  const fetchStats = () => {
    const data = getStats(state.filters)
    operations.setStats(data)
  }

  return fetchStats
}
