import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <div className="bg-transparent">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/create" element={<CreatePost />} />
      </Route>
    </Routes>
  </div>

  )
}

export default App
