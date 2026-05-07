import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const demoCredentials = {
  identifier: 'farmer123',
  password: 'kisan123',
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [error, setError] = useState('')

  const stored = (() => {
    const raw = getCookie('kisan_user')
    if (!raw) return null
    try {
      return JSON.parse(raw)
    } catch (e) {
      return null
    }
  })()

  const handleSubmit = (event) => {
    event.preventDefault()

    const validFromCookie =
      stored &&
      (form.identifier.trim() === stored.mobile ||
        form.identifier.trim().toLowerCase() === stored.farmerName.trim().toLowerCase()) &&
      form.password === stored.password

    const validDemo =
      form.identifier.trim().toLowerCase() === demoCredentials.identifier &&
      form.password === demoCredentials.password

    if (!validFromCookie && !validDemo) {
      setError('Invalid credentials. Register first or use demo credentials.')
      return
    }

    setError('')
    navigate('/dashboard')
  }

  return (
    <div className="app-shell split-layout">
      <Sidebar />

      <main className="page-content with-sidebar center-stage">
        <section className="auth-card white-card narrow-card">
          <p className="section-kicker">Welcome back</p>
          <h2>Login</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Mobile Number or Username
              <input
                type="text"
                name="identifier"
                value={form.identifier}
                onChange={(event) => setForm({ ...form, identifier: event.target.value })}
                placeholder="Enter mobile number or username"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                placeholder="Enter your password"
              />
            </label>

            <div className="demo-credentials">
              <span>Demo Username: farmer123</span>
              <span>Demo Password: kisan123</span>
            </div>

            {error ? <p className="auth-error">{error}</p> : null}

            <button type="submit" className="primary-button full-width">
              Login
            </button>
          </form>

          <div className="auth-links">
            <Link to="/register">Create a new account</Link>
            <Link to="/">Back to Home</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Login
