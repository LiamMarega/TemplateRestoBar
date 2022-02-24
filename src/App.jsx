import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "../src/Home/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
