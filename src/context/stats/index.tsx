// Modules
import React, { useState, createContext, useEffect } from 'react'

// Application
import { Stats, StatsFilter, StatsTime } from 'typings/stats'
import { sleep } from 'utils'

const StatsContext = createContext(null)

export function StatsProvider(props) {
  const [isLoading, setLoading] = useState(true)
  const [stats, setStats] = useState<Stats>(null)
  const [filters, setFilters] = useState<StatsFilter>({
    timeUnit: StatsTime.WEEK,
    timeUnitCount: 1,
  })

  async function mountPage() {
    // Just used for showing loading logic
    await sleep(2000)
    setLoading(false)
  }

  useEffect(() => {
    mountPage()
  }, [])

  return (
    <StatsContext.Provider
      value={{
        state: {
          isLoading,
          stats,
          filters,
        },
        operations: {
          setStats,
          setFilters,
        },
      }}
      {...props}
    />
  )
}

export function useStatsContext() {
  const context = React.useContext(StatsContext)
  if (context === undefined) {
    throw new Error(`useStats must be used within a StatsProvider`)
  }
  return context
}
