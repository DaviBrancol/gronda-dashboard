// Modules
import React from 'react'
import '@testing-library/jest-dom'
import { screen, cleanup, render } from '@testing-library/react'

// Application
import { CompanyTable } from '.'
import { mockCompanies } from 'mock/company.mock'

describe('[Component] - CompanyTable', () => {
  afterEach(() => {
    cleanup()
  })

  it('should have 4 rows for mocked companies', async () => {
    const { data } = mockCompanies
    render(<CompanyTable data={data} sort={{ property: 'id', order: 'down' }} isCritical={false} />)

    const rows = screen.getAllByRole('table-row')
    expect(rows).toBeDefined()
    expect(rows).toHaveLength(4)
  })

  it('when sorting by id, should be ordered numericly', async () => {
    const { data } = mockCompanies
    render(<CompanyTable data={data} sort={{ property: 'id', order: 'down' }} isCritical={false} />)

    const rows = screen.getAllByRole('table-row-id')
    expect(rows).toBeDefined()
    expect(rows[0].innerHTML).toContain('1')
    expect(rows[1].innerHTML).toContain('2')
    expect(rows[2].innerHTML).toContain('3')
    expect(rows[3].innerHTML).toContain('4')
  })

  it('when sorting by most renewals, should be ordered numericly', async () => {
    const { data } = mockCompanies
    render(
      <CompanyTable data={data} sort={{ property: 'renewals', order: 'down' }} isCritical={false} />
    )

    const rows = screen.getAllByRole('table-row-id')
    expect(rows).toBeDefined()
    expect(rows[0].innerHTML).toContain('4')
    expect(rows[1].innerHTML).toContain('2')
    expect(rows[2].innerHTML).toContain('1')
    expect(rows[3].innerHTML).toContain('3')
  })

  it('when sorting by npsAvg up, should be order numericly', async () => {
    const { data } = mockCompanies
    render(
      <CompanyTable data={data} sort={{ property: 'npsAvg', order: 'up' }} isCritical={false} />
    )

    const rows = screen.getAllByRole('table-row-id')
    expect(rows).toBeDefined()
    expect(rows[0].innerHTML).toContain('4')
    expect(rows[1].innerHTML).toContain('1')
    expect(rows[2].innerHTML).toContain('2')
    expect(rows[3].innerHTML).toContain('3')
  })
})
