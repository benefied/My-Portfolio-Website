import { useState } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar/>
      <Heading/>
      <Portfolio/>
      <Skills/>
    </>
  )
}

export default App
