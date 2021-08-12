// Modules
import { useEffect } from 'react'

// Application
import { useStatsHook } from 'hooks'

// Components
import { DashboardCard } from 'components'

export const DashboardScreen: React.VFC = () => {
  const hook = useStatsHook()

  // When filters change, refetch the panel data
  useEffect(() => {
    hook.fetchStats()
  }, [hook.filters])

  return (
    <div className="relative w-full min-h-screen bg-white text-gray-600">
      <div className="container flex flex-col bg-white min-h-screen mx-auto py-12">
        <div className="flex self-end">
          Filter by
          <div className="px-16 ml-10 border border-gray-500">Last Month</div>
        </div>
        <div className="grid grid-cols-3 gap-10 pt-10">
          <DashboardCard
            title="Active sourcing"
            subtitle="Last period"
            data={hook.stats?.activeSource.currentPeriod}
            subtitleData={hook.stats?.activeSource.lastPeriod}
            color="primary"
          />
          <DashboardCard
            title="Weekly Active"
            subtitle="Last period"
            data={hook.stats?.weeklyActive.currentPeriod}
            subtitleData={hook.stats?.weeklyActive.lastPeriod}
            color="success"
          />
          <DashboardCard
            title="NPS"
            subtitle="Last period"
            data={hook.stats?.nps.currentPeriod}
            subtitleData={hook.stats?.nps.lastPeriod}
            color="danger"
          />
        </div>
      </div>
    </div>
  )
}
