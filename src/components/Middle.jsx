import React from 'react'
import middleImage from "../assets/middle.jpg"

const Middle = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-12 space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Dynamic Service Suite</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl">Embrace Innovation: Let's Create Together</h2>
          <div className="text-gray-300">
            <p>Step into innovation! Explore our range of services and let's create something together.</p>
            <p>Your Vision, our expertise. Let's begin!</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-[60%]">
            <div>
              <div className="mb-4">
                <h3 className="hover:text-cyan-400 cursor-pointer font-semibold">Flutter App Development -</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance apps for any platform — faster and easier than ever before. Ready to revolutionize your app experience? <span className="text-cyan-400 font-semibold">Let's get started today!</span>
                </p>
              </div>

              <div className="mb-4">
                <h3 className="hover:text-cyan-400 cursor-pointer font-semibold">UI/UX Design +</h3>
              </div>

              <div className="mb-4">
                <h3 className="hover:text-cyan-400 cursor-pointer font-semibold">Customization Integration +</h3>
              </div>

              <div className="mb-4">
                <h3 className="hover:text-cyan-400 cursor-pointer font-semibold">Testing Quality Assurance +</h3>
              </div>

              <div className="mb-4">
                <h3 className="hover:text-cyan-400 cursor-pointer font-semibold">Maintenance Support +</h3>
              </div>

              <div className="mb-4">
                <h3 className="hover:text-cyan-400 cursor-pointer font-semibold">Consulting Training +</h3>
              </div>

              <div className="mb-4">
                <h3 className="hover:text-cyan-400 cursor-pointer font-semibold">Migration Upgrades +</h3>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%] flex justify-center items-center">
            <img
              src={middleImage}
              alt="Services Visual"
              className="rounded-lg shadow-lg w-full h-auto object-cover transition duration-500 transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Middle
