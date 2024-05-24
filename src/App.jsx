// import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PastConversation from "./pages/PastConversation"
import { useState } from "react"

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<PastConversation />} />
    </Routes>
  </>
}

export default App
