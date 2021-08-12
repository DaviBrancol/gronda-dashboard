// Modules
import cs from 'clsx'

interface Props {
  title: string
  data?: number
  subtitle: string
  subtitleData?: number
  color: 'primary' | 'success' | 'danger'
}

export const DashboardCard: React.VFC<Props> = ({ title, data, subtitle, subtitleData, color }) => {
  return (
    <div
      className={cs(
        'w-full flex flex-col justify-between py-6 pl-6 h-48 rounded-lg text-white font-light text-lg',
        {
          'bg-primary-500': color === 'primary',
          'bg-success-500': color === 'success',
          'bg-danger-500': color === 'danger',
        }
      )}
    >
      <p>{title}</p>
      <p className="text-4xl font-bold">{data}</p>
      <p>
        {subtitleData} {subtitle}
      </p>
    </div>
  )
}
