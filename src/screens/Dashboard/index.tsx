// Modules
import { useEffect } from 'react'

// Application
import { useStatsHook } from 'hooks'

// Components
import { DashboardCard, Filter } from 'components'

export const DashboardScreen: React.VFC = () => {
  const hook = useStatsHook()

  // When filters change, refetch the panel data
  useEffect(() => {
    hook.fetchStats()
  }, [hook.filters])

  // Return null until the context mount itself.
  if (!hook.stats) {
    return null
  }

  return (
    <div className="relative w-full min-h-screen bg-white text-gray-600">
      <div className="container flex flex-col bg-white min-h-screen mx-auto py-12">
        <div className="relative flex self-end">
          <p>Filter by</p>
          <Filter currentFilter={hook.filters} setFilter={hook.setFilter} />
        </div>
        <div className="grid grid-cols-3 gap-10 pt-10">
          <DashboardCard
            title="Active sourcing"
            subtitle="Last period"
            data={hook.stats?.activeSource.currentPeriod}
            subtitleData={hook.stats?.activeSource.lastPeriod}
            design="one"
          />
          <DashboardCard
            title="Weekly Active"
            subtitle="Last period"
            data={hook.stats?.weeklyActive.currentPeriod}
            subtitleData={hook.stats?.weeklyActive.lastPeriod}
            design="two"
          />
          <DashboardCard
            title="NPS"
            subtitle="Last period"
            data={hook.stats?.nps.currentPeriod}
            subtitleData={hook.stats?.nps.lastPeriod}
            design="three"
          />
        </div>
      </div>
    </div>
  )
}
