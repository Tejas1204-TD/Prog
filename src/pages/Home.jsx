import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import FeatureCard from '../components/FeatureCard'

function Home() {
  return (
    <div className="app-shell split-layout">
      <Sidebar />

      <main className="page-content with-sidebar">
        <section className="hero-panel white-card">
          <p className="section-kicker">Welcome to Kisan Dost</p>
          <h2>Scientific Fertilizer Planning for Happy Farmers</h2>
          <p className="hero-copy">
            A clean farming dashboard designed to help growers enter soil data, understand crop needs, and
            reach a practical fertilizer plan.
          </p>

          <div className="section-grid three-up">
            <FeatureCard
              title="Enter NPK"
              description="Add the soil nutrition values for your field with a simple, focused form."
            />
            <FeatureCard
              title="Set Yield"
              description="Choose your target yield so the plan stays aligned with harvest goals."
            />
            <FeatureCard
              title="Get Plan"
              description="See a clear recommendation flow with no clutter and no extra steps."
            />
          </div>

          <div className="action-grid">
            <article className="action-card">
              <span className="action-label">New Farmer</span>
              <h3>Start your account</h3>
              <p>Create a registration flow to keep your future plans organized.</p>
              <Link className="primary-button" to="/register">
                Register
              </Link>
            </article>

            <article className="action-card">
              <span className="action-label">Returning Farmer</span>
              <h3>Continue planning</h3>
              <p>Sign in and move straight to the fertilizer recommendation dashboard.</p>
              <Link className="primary-button outline" to="/login">
                Login
              </Link>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
