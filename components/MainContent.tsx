import type { NextPage } from "next"
import Star from "./Star"

const MainContent: NextPage = () => {
  return (
    <div className="w-9/12 text-center py-6 mx-auto flex justify-between">
        <div className="absolute top-48 left-44">
            <Star size={8}/>
            <Star size={10} styles="translate-y-4 translate-x-8"/>
        </div>
        <div className="absolute top-48 right-44">
            <Star size={8}/>
            <Star size={10} styles="translate-y-4 -translate-x-8"/>
        </div>
        <div className="text-center">
            <h1>Join India's First</h1>
        </div>
    </div>
  )
}
export default MainContent