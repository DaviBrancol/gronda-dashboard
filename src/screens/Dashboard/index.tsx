// Modules
import { useEffect } from 'react'

// Application
import { useCompanyHook, useStatsHook } from 'hooks'

// Components
import { DashboardCard, Filter, CompanyTable, Sort } from 'components'

export const DashboardScreen: React.VFC = () => {
  const stats = useStatsHook()
  const companies = useCompanyHook()

  // When filters change, refetch the panel data
  useEffect(() => {
    stats.fetchStats()
  }, [stats.filters])

  useEffect(() => {
    companies.fetchStats()
  }, [])

  // Return null until the context mount itself.
  if (!stats.stats || !companies.companies) {
    return null
  }

  return (
    <div className="relative w-full min-h-screen bg-white text-gray-600">
      <div className="relative container flex flex-col bg-white mx-auto pt-12">
        <Filter currentFilter={stats.filters} setFilter={stats.setFilter} />
        <div className="grid grid-cols-3 gap-10 pt-10 relative z-40">
          <DashboardCard
            title="Active sourcing"
            subtitle="Last period"
            data={stats.stats?.activeSource.currentPeriod}
            subtitleData={stats.stats?.activeSource.lastPeriod}
            design="one"
          />
          <DashboardCard
            title="Weekly Active"
            subtitle="Last period"
            data={stats.stats?.weeklyActive.currentPeriod}
            subtitleData={stats.stats?.weeklyActive.lastPeriod}
            design="two"
          />
          <DashboardCard
            title="NPS"
            subtitle="Last period"
            data={stats.stats?.nps.currentPeriod}
            subtitleData={stats.stats?.nps.lastPeriod}
            design="three"
          />
        </div>
      </div>
      <div className="relative container flex flex-col bg-white mx-auto py-12">
        <Sort sort={companies.sort} setSort={companies.setSort} />
        <CompanyTable
          data={companies.companies}
          sort={companies.sort}
          isCritical={companies.critical}
        />
      </div>
    </div>
  )
}
