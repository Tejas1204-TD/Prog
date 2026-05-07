import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ farmerName: '', mobile: '', password: '' })

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // store credentials in cookie for simple demo (not secure)
    const payload = JSON.stringify({
      farmerName: form.farmerName,
      mobile: form.mobile,
      password: form.password,
    })
    setCookie('kisan_user', payload, 30)
    // after registering, go to login so user can sign in
    navigate('/login')
  }

  return (
    <div className="app-shell split-layout">
      <Sidebar />

      <main className="page-content with-sidebar center-stage">
        <section className="auth-card white-card narrow-card">
          <div className="tractor-icon" aria-hidden="true">
            🚜
          </div>
          <p className="section-kicker">Join Kisan Dost</p>
          <h2>Join Kisan Dost</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Farmer Name
              <input
                type="text"
                name="farmerName"
                value={form.farmerName}
                onChange={(e) => setForm({ ...form, farmerName: e.target.value })}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Mobile Number
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                placeholder="Enter mobile number"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Create a password"
              />
            </label>

            <button type="submit" className="primary-button full-width">
              Create My Account
            </button>
          </form>

          <div className="auth-links">
            <Link to="/login">Already have an account? Login</Link>
            <Link to="/">Back to Home</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Register
