import type { NextPage } from "next"

const Nav: NextPage = () => {
  return (
    <div className="w-9/12 text-center py-6 mx-auto flex justify-between">
      <div className="flex justify-between">
        <img src="/logo.png" className="h-10 mr-2" alt="Markit Up Logo" />
        <h1 className="text-4xl font-bold text-black">Markit Up</h1>
      </div>
      <div>
        <button className="mx-5 p-1 text-xl text-[#5271FF] font-bold hover:text-[#4f6df1]">
          Home
        </button>
        <button className="mx-5 p-1 text-xl font-bold hover:text-[#373636]">
          Services
        </button>
        <button className="mx-5 p-1 text-xl font-bold hover:text-[#373636]">
          About
        </button>
        <button className="mx-5 p-1 text-xl font-bold hover:text-[#373636]">
          Conatct
        </button>
      </div>
      <div>
        <button className="flex justify-between mx-4 font-bold rounded-md bg-[#5271FF] text-white p-2 hover:-translate-y-1 transition-transform drop-shadow-2xl shadow-[#5271FF]">
          Join us on <img src="/discord.png" alt="Discord Logo" className="mx-2 h-6" /> Discord
        </button>
      </div>
    </div>
  )
}
export default Nav
