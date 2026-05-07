import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Register() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
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
              <input type="text" name="farmerName" placeholder="Enter your name" />
            </label>
            <label>
              Mobile Number
              <input type="tel" name="mobile" placeholder="Enter mobile number" />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="Create a password" />
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
