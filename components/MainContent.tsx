import type { NextPage } from "next"
import Icon from "./Icon"
import Star from "./Star"

const MainContent: NextPage = () => {
  return (
    <div className="w-9/12 text-center py-6 mx-auto flex justify-between">
      <div className="absolute top-48 left-44">
        <Star size={6} />
        <Star size={10} styles="translate-y-4 translate-x-8" />
      </div>
      <div className="absolute top-48 right-44">
        <Star size={6} />
        <Star size={10} styles="translate-y-4 -translate-x-8" />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="heading-text text-8xl text-[#002C6E]">Join India's First</h1>
        <h1 className="heading-text text-8xl text-[#5271FF]">Builders Community</h1>
      </div>
      <Icon icon="🚀" styles="-rotate-12 absolute top-96 left-44"/>
      <Icon icon="💰" styles="rotate-12 absolute top-96 right-44"/>
    </div>
  )
}
export default MainContent
