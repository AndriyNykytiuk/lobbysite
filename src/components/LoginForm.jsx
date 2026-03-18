import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // ← Додати
import '../css/loginForm.css'

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate() // ← Додати
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })

      const data = await response.json()

      if (data.success) {
        setSuccess('Вхід успішний!')
        localStorage.setItem('token', data.token)
        localStorage.setItem('adminUsername', data.admin.username)
        
        setTimeout(() => {
          onClose()
          navigate('/admin') // ← Використати navigate замість window.location
          window.location.reload() // ← Перезавантажити для оновлення стану
        }, 1000)
      } else {
        setError(data.message || 'Помилка входу')
      }
    } catch (err) {
      setError('Помилка при з\'єднанні з сервером')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='login-form-overlay' onClick={onClose}>
      <div className='login-form-container' onClick={(e) => e.stopPropagation()}>
        <div className='login-form-header'>
          <h2>Вхід адміністратора</h2>
          <button className='close-btn' onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className='login-form'>
          <div className='form-group'>
            <label htmlFor='username'>Логін:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Введіть логін'
              required
              disabled={loading}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Пароль:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Введіть пароль'
              required
              disabled={loading}
            />
          </div>

          {error && <div className='error-message'>{error}</div>}
          {success && <div className='success-message'>{success}</div>}

          <button 
            type='submit' 
            className='login-btn'
            disabled={loading}
          >
            {loading ? 'Завантаження...' : 'Увійти'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm