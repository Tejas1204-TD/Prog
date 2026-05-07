import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Recommendation() {
  const { state } = useLocation()
  const recommendation = state || {
    crop: 'Wheat',
    targetYield: 'Not provided',
    nitrogen: '0',
    phosphorus: '0',
    potassium: '0',
  }

  return (
    <div className="dashboard-shell">
      <Navbar />

      <main className="dashboard-content recommendation-view">
        <section className="white-card result-card">
          <p className="section-kicker">Result</p>
          <h2>Fertilizer Recommendation</h2>
          <p className="hero-copy center-text">
            Your plan has been calculated using the crop selection and soil inputs.
          </p>

          <div className="result-meta">
            <div>
              <span>Target Yield</span>
              <strong>{recommendation.targetYield}</strong>
            </div>
            <div>
              <span>Selected Crop</span>
              <strong>{recommendation.crop}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Calculated</strong>
            </div>
          </div>

          <div className="nutrient-grid">
            <article className="nutrient-card green">
              <span>Nitrogen</span>
              <strong>{recommendation.nitrogen}</strong>
            </article>
            <article className="nutrient-card orange">
              <span>Phosphorus</span>
              <strong>{recommendation.phosphorus}</strong>
            </article>
            <article className="nutrient-card blue">
              <span>Potassium</span>
              <strong>{recommendation.potassium}</strong>
            </article>
          </div>

          <div className="button-row center-buttons">
            <Link to="/dashboard" className="primary-button outline">
              New Calculation
            </Link>
            <button type="button" className="primary-button" onClick={() => window.print()}>
              Print Report
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Recommendation
