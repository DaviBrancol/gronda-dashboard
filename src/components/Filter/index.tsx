// Modules
import { useState } from 'react'
import cs from 'clsx'

// Application
import { options } from './options'
import { StatsFilter } from 'typings/stats'

interface Props {
  currentFilter: StatsFilter
  setFilter: (filter: StatsFilter) => void
}

export const Filter: React.VFC<Props> = ({ currentFilter, setFilter }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const findOption = () => {
    return options.find(
      (item) =>
        item.value.timeUnit === currentFilter.timeUnit &&
        item.value.timeUnitCount === currentFilter.timeUnitCount
    ).label
  }

  const updateFilter = (value: StatsFilter) => {
    setFilter(value)
    setOpen(false)
  }

  return (
    <ul className={cs('relative px-16 ml-10 border border-gray-500')}>
      {!isOpen ? (
        <li onClick={() => setOpen(true)}>{findOption()}</li>
      ) : (
        options.map((item) => (
          <li onClick={() => updateFilter(item.value)} key={item.label}>
            {item.label}
          </li>
        ))
      )}
    </ul>
  )
}
