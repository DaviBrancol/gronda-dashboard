// Modules
import { useState } from 'react'

// Application
import { options } from './options'
import { CompanySort } from 'typings/companies'

interface Props {
  sort: CompanySort
  setSort: (sort: CompanySort) => void
}

export const Sort: React.VFC<Props> = ({ sort, setSort }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const findOption = () => {
    return options.find(
      (item) => item.value.property === sort.property && item.value.order === sort.order
    ).label
  }

  const updateFilter = (value: CompanySort) => {
    setSort(value)
    setOpen(false)
  }

  return (
    <div className="pt-10 self-end flex z-50 absolute right-0 top-0">
      <p>Sort by</p>
      <ul className="w-48 text-center ml-6 border border-gray-500 bg-white cursor-pointer">
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
