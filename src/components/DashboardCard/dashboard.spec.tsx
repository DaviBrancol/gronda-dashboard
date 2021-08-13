// Modules
import React from 'react'
import '@testing-library/jest-dom'
import { screen, cleanup, render } from '@testing-library/react'

// Application
import { DashboardCard } from '.'

const Mock = () => {
  return (
    <DashboardCard
      title="Title Test"
      data={20}
      subtitle="Subtitle Test"
      subtitleData={10}
      design="one"
    />
  )
}

describe('[Component] - DashboardCard', () => {
  afterEach(() => {
    cleanup()
  })

  it('should have the propped title display on screen', async () => {
    render(<Mock />)

    const title = screen.getByText('Title Test')
    expect(title).toHaveTextContent('Title Test')
  })

  it('should have the propped data display on screen', async () => {
    render(<Mock />)

    const data = screen.getByText('20')
    expect(data).toHaveTextContent('20')
  })

  it('should have the propped subtitle and subtitle data display on screen', async () => {
    render(<Mock />)

    const subtitle = screen.getByText('10 Subtitle Test')
    expect(subtitle).toHaveTextContent('10 Subtitle Test')
  })
})
