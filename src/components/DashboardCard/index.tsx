// Modules
import cs from 'clsx'

interface Props {
  title: string
  data?: number
  subtitle: string
  subtitleData?: number
  design: 'one' | 'two' | 'three'
}

export const DashboardCard: React.VFC<Props> = ({
  title,
  data,
  subtitle,
  subtitleData,
  design,
}) => {
  return (
    <div className={cs('relative w-full py-6 pl-6 h-48 rounded-lg text-white font-light text-lg')}>
      <div className="flex flex-col justify-between relative z-20 h-full">
        <p>{title}</p>
        <p className="text-4xl font-bold">{data}</p>
        <p>
          {subtitleData} {subtitle}
        </p>
      </div>
      <img
        src={`/img/dashboard-${design}.png`}
        className="top-0 left-0 absolute w-full h-full object-cover z-10"
      />
    </div>
  )
}
