import type { NextPage } from "next"
import MainContent from "../components/MainContent"

import Nav from "../components/Nav"

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-[#F4F6FF] h-[700px]">
        <Nav></Nav>
        <MainContent></MainContent>
      </div>
    </div>
  )
}

export default Home
