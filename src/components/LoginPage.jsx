import React, { useState } from 'react'
import '../css/loginForm.css'
// Видалити: import adminComponent from './adminComponent'

const LoginPage = () => {
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
        setSuccess('Вхід успішний! Відкриваємо адмін панель...')
        localStorage.setItem('token', data.token)
        localStorage.setItem('adminUsername', data.admin.username)
        
        setTimeout(() => {
          // Відкрити адмін панель у НОВІЙ вкладці
          const adminWindow = window.open('/adminComponent', '_blank')
          
          // Перевірити, чи вікно відкрилося (може бути заблоковано popup blocker)
          if (adminWindow) {
            // Закрити поточне вікно логіну
            window.close()
          } else {
            setError('Будь ласка, дозвольте відкриття popup вікон для цього сайту')
          }
        }, 1500)
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
    <div className='login-page-wrapper'>
      <div className='login-form-container' style={{ margin: '50px auto', maxWidth: '400px' }}>
        <div className='login-form-header'>
          <h2>Вхід адміністратора</h2>
          <button className='close-btn' onClick={() => window.close()}>×</button>
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

export default LoginPage