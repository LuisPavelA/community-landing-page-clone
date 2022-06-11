import type { NextPage } from "next"

interface Props {
  icon: string
  styles?: string
}

const Star: NextPage<Props> = ({ icon, styles }) => {
  return (
    <div>
      <h1 className={`${styles} drop-shadow-2xl w-20 h-20 text-5xl flex justify-center items-center rounded-md bg-white shadow-[#031F4B]`}>{icon}</h1>
    </div>
  )
}
export default Star
