import { useState } from 'react'
import Navbar from "#components/Navbar.jsx"
import Welcome from "#components/Welcome.jsx"
import Dock from "#components/Dock.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />
    </>
  )
}

export default App
