import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage'
import DocumentPage from './component/DocumentPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/document/1" element={<DocumentPage />} />
      </Routes>
    </Router>
  )
}

export default App
