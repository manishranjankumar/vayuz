import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import Middle from './components/Middle'
import Form from './components/Form'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
      <div className="flex bg-black text-white">
        <Navbar />
        <div className="flex-1 pl-12 space-y-16">
          <Home />
          <Middle />
          <Form />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

