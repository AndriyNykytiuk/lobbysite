import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'  
import Main from './components/Main'
import './App.css'
import './css/app.css'
import WhoWeAre from './components/WhoWeAre'

function App() {
 

  return (
    <>
      <div className="app">

        <Header />
        <Main/>
        <Footer />
       
      </div>
      
    </>
  )
}

export default App
