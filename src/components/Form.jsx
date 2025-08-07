import React from 'react'

const Form = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-12 space-y-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[20%]">
          <section className="w-full md:w-[50%] flex flex-col justify-between text-center md:text-left space-y-6">
            <div className="flex justify-between flex-wrap gap-2 mt-4 text-sm sm:text-base">
              <span>Events</span>
              <span>Gen AI</span>
              <span>Careers</span>
              <span>Case Study</span>
              <span>SME Talks</span>
            </div>

            <div className="mt-auto space-y-2 pt-10 text-sm sm:text-base">
              <div>For any collaborative projects or enquiries feel free to connect with us.</div>
              <br />
              <div>Vayuz.com</div>
            </div>
          </section>

          <section className="w-full md:w-[30%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Connect With Us</h1>
            <form className="p-6 rounded-lg space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full p-2 border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-cyan-400 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}

export default Form
