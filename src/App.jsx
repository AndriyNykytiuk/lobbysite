import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import AdminComponent from './components/adminComponent'
import LoginPage from './components/LoginPage' // ← Додати
import './App.css'
import './css/app.css'

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Перевірка токену при завантаженні
    const token = localStorage.getItem('token')
    if (token) {
      setIsAdminLoggedIn(true)
    }
    setIsLoading(false)
  }, [])

  // Компонент захищеного роута
  const ProtectedRoute = ({ children }) => {
    return isAdminLoggedIn ? children : <Navigate to="/login" replace />
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Routes>
      {/* Сторінка логіну (окреме вікно) */}
      <Route path="/login" element={<LoginPage />} />

      {/* Адмін панель (захищений роут) */}
      <Route 
        path="/adminComponent" 
        element={
          <ProtectedRoute>
            <AdminComponent />
          </ProtectedRoute>
        } 
      />

      {/* Головна сторінка */}
      <Route 
        path="/*" 
        element={
          <div className="app">
            <Header />
            <Main />
            <Footer />
          </div>
        } 
      />

      {/* Всі інші роути перенаправляємо на головну */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App