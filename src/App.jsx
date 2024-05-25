// import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PastConversation from "./pages/PastConversation"
import { useState } from "react";
import { ContextBotFeedback } from "./components/ContextBotFeedback";

function App() {
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(true);
  
  return <>
    <Routes>
        <Route path="/" element={<Home showWelcomeMsg={showWelcomeMsg} setShowWelcomeMsg={setShowWelcomeMsg} />} />
        <Route path="/history" element={<PastConversation showWelcomeMsg={showWelcomeMsg} setShowWelcomeMsg={setShowWelcomeMsg} />} />
    </Routes>
  </>
}

export default App
