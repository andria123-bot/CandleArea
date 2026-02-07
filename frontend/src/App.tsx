import { Routes, Route } from "react-router-dom"
import ServicesPage from "./components/Services"
import HomePage from "./components/Home"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <>
      <Navbar />  

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
