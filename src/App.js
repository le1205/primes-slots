import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from 'src/pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route redirect="/01" path="/" element={<Home />} />
        <Route path="/01" element={<Home />} />
        <Route path="/02" element={<Home />} />
        <Route path="/03" element={<Home />} />
        <Route path="/04" element={<Home />} />
        <Route path="/05" element={<Home />} />
        <Route path="/06" element={<Home />} />
        <Route path="/07" element={<Home />} />
        <Route path="/08" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
