import type { NextPage } from "next"
import Icon from "./Icon"
import Star from "./Star"
import Stats from "./Stats"

const MainContent: NextPage = () => {
  return (
    <div className="w-9/12 text-center py-6 mx-auto flex">
      <div className="absolute top-48 left-44">
        <Star size={6} />
        <Star size={10} styles="translate-y-4 translate-x-8" />
      </div>
      <div className="absolute top-48 right-44">
        <Star size={6} />
        <Star size={10} styles="translate-y-4 -translate-x-8" />
      </div>
      <Icon icon="🚀" styles="-rotate-12 absolute top-96 left-44"/>
      <Icon icon="💰" styles="rotate-12 absolute top-96 right-44"/>
      <div className="w-full">
        <h1 className="heading-text text-8xl text-[#002C6E]">Join India's First</h1>
        <h1 className="heading-text text-8xl text-[#5271FF]">Builders Community</h1>
        <p className="heading-text text-2xl mt-4 text-[#002C6E]">We help individuals to grow by unleashing the potential of social media 🚀</p>
        <div>
          <img src="/landing.png" className="mt-20 mx-auto" alt="Landing Image" />
          <div className="flex justify-between">
            <div className="text-left">
              <h1 className="text-4xl pl-5 font-semibold">Trusted by</h1>
              <img src="/trusted-by.png" className="w-66" alt="People that trust the product" />
            </div>
            <div className="text-left flex align-middle">
              <div>
                <img src="/trophy.png" className="h-24 mr-2" alt="Trophy" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Best Community</h1>
                <h1 className="text-4xl font-bold">Award 2022</h1>
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </div>
    </div>
  )
}
export default MainContent
