import type { NextPage } from "next"

interface Props {
    size: number
    styles?: string
}

const Star: NextPage<Props> = ({ size, styles }) => {
  return (
    <div>
      <img src="/star.png" alt="Star" className={`h-${size} ${styles}`}/>
    </div>
  )
}
export default Star
