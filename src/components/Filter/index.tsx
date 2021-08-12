// Modules
import { useState } from 'react'

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
    <div className="pt-10 self-end flex z-50 absolute right-4 top-0 md:right-0">
      <p>Filter by</p>
      <ul className="w-32 md:w-48 text-center ml-4 border border-gray-500 bg-white cursor-pointer md:ml-6">
        {!isOpen ? (
          <li className="w-full" onClick={() => setOpen(true)}>
            {findOption()}
          </li>
        ) : (
          options.map((item) => (
            <li className="w-full" onClick={() => updateFilter(item.value)} key={item.label}>
              {item.label}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
