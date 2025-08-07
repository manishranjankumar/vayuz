import React from "react"
import flutterImage from "../assets/homeimage.jpg"
import { MdArrowOutward } from "react-icons/md"

const Home = () => {
  return (
    <>
      <div className="space-y-12 px-4 sm:px-6 md:px-12">
        <section className="text-center space-y-4">
          <div className="text-base sm:text-lg md:text-xl font-semibold text-gray-300">
            Securing Your Flutter App: Best Practices and Techniques
          </div>
          <hr className="border-gray-600 my-2" />
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Unlock the Potential of Flutter
            </div>

            <div className="text-base sm:text-lg">
              Your Premier Partner for Cross-Platform App Excellence!
            </div>

            <div className="mt-4">
              <button className="bg-cyan-400 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition duration-300 cursor-pointer mt-6">
                UPGRADE YOUR TECH
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={flutterImage}
              alt="Flutter Security"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full object-cover"
            />
          </div>
        </section>

        <section className="p-6 rounded-lg space-y-6 md:space-y-0 md:flex md:justify-between md:items-start md:gap-6">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="text-xl sm:text-2xl font-semibold">Flutter's Dawn</div>
            <p className="text-gray-300 text-sm sm:text-base">History of flutter</p>
          </div>

          <div className="md:w-1/3 text-sm text-gray-400">
            Uncover the fascinating story of flutter in 'Flutter's Dawn: History
            of flutter Lorem ipsum dolor sit amet conluptate facilis mollitia
            dolore! Cum in rerum unde odio inventore aperiam temporibus aliquid
            rem veritatis.{" "}
            <span className="text-cyan-400 font-semibold">Click to Begin</span>
          </div>

          <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center md:justify-end">
            <button className="bg-cyan-400 text-white px-9 py-3 text-lg rounded-full hover:bg-cyan-500 transition duration-300 cursor-pointer flex items-center gap-2">
              BEGIN <MdArrowOutward size={22} />
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
