// Modules
import React, { useState, createContext } from 'react'

// Application
import { Company, CompanySort } from 'typings/companies'

interface CompanyContextProps {
  state: {
    isLoading: boolean
    companies: Company[]
    sort: CompanySort
    critical: boolean
  }
  operations: {
    setCompanies: (companies: Company[]) => void
    setSort: (sort: CompanySort) => void
    setCritical: (critical: boolean) => void
  }
}

const CompanyContext = createContext<CompanyContextProps>(null)

export function CompanyProvider(props) {
  const [companies, setCompanies] = useState<Company[]>(null)
  const [sort, setSort] = useState<CompanySort>({
    property: 'id',
    order: 'down',
  })
  const [critical, setCritical] = useState<boolean>(false)

  return (
    <CompanyContext.Provider
      value={{
        state: {
          companies,
          sort,
          critical,
        },
        operations: {
          setCompanies,
          setSort,
          setCritical,
        },
      }}
      {...props}
    />
  )
}

export function useCompanyContext() {
  const context = React.useContext(CompanyContext)
  if (context === undefined) {
    throw new Error(`useCompany must be used within a CompanyProvider`)
  }
  return context
}
