import React from 'react'
import logo from "../src/assets/logo.png";
import navbar from "../src/assets/navbar.jpg"

const Navbar = () => {
  return (
    <>
      <nav className="h-full w-48 bg-black border-r border-gray-800 text-white p-6 flex flex-col items-start space-y-6 z-50">
        <img src={logo} alt="VAYUZ Logo" className="w-30 h-10" />

        <div className="relative">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 z-0"></div>
          <button className="relative z-10 bg-black text-white px-4 py-2 rounded-full font-semibold w-full">
            CONTACT US
          </button>
        </div>

        <ul className="space-y-3 font-medium text-gray-300">
          <li className="hover:text-white cursor-pointer">App Development</li>
          <li className="hover:text-white cursor-pointer">Challenges</li>
          <li className="hover:text-white cursor-pointer">Hire Developer</li>
          <li className="hover:text-white cursor-pointer">Community</li>
          <li className="hover:text-white cursor-pointer mt-60">
            <img src={navbar} alt="" />
            <p>Lorem ipsum dkjnjdf jidjidf 8y2hhbewf</p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
