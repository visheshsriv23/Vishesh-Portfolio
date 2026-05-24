import { useState } from 'react'
import Navbar from "#components/Navbar.jsx"
import Welcome from "#components/Welcome.jsx"
import Dock from "#components/Dock.jsx"
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Terminal } from "#windows/index.js"

gsap.registerPlugin(Draggable);

function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </>
  )
}

export default App
