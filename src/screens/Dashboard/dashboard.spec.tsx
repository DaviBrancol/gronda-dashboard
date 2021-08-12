// Modules
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'

// Application
import { DashboardScreen } from '.'
import { ExampleProvider } from '@context/index'

const Mocking = () => {
  return (
    <ExampleProvider>
      <DashboardScreen />
    </ExampleProvider>
  )
}

describe('[Screen] - Dashboard', () => {
  afterEach(() => {
    cleanup()
  })

  it('should be defined', async () => {
    const { container } = render(<Mocking />)
    expect(container).toBeDefined()
  })
})
