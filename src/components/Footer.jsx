import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="px-4 sm:px-6 md:px-12 py-8 text-white flex flex-col sm:flex-row flex-wrap justify-between items-start gap-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="hover:text-cyan-400 cursor-pointer">About</div>
          <div className="hover:text-cyan-400 cursor-pointer">Insights</div>
          <div className="hover:text-cyan-400 cursor-pointer">Community</div>
          <div className="hover:text-cyan-400 cursor-pointer">Privacy & Policies</div>
        </div>

        <div className="w-40"></div>
      </footer>
    </>
  )
}

export default Footer
