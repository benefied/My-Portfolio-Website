import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import SyncLoader from "react-spinners/SyncLoader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
  }, [])
  return (
    <>
      {
        isLoading ?
        <div className="appLogo__Area">
        <div className='appLogo__logo'>
        <SyncLoader
        color={"rgba(21, 146, 90, 1)"}
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
      </div>
        :
      <>
      <Navbar/>
      <Heading/>
      <Portfolio/>
      <Skills/>
      </>
      }
    </>
  )
}

export default App
