import Sidebar from '../components/Sidebar'
import FeatureCard from '../components/FeatureCard'

function About() {
  return (
    <div className="app-shell split-layout">
      <Sidebar />

      <main className="page-content with-sidebar">
        <section className="white-card story-card">
          <p className="section-kicker">About Science</p>
          <h2>Why We Built Kisan Dost</h2>
          <p className="hero-copy">
            The goal is to make fertilizer planning feel simple, visually calm, and rooted in basic crop science
            instead of guesswork.
          </p>

          <div className="section-grid two-up">
            <FeatureCard
              title="Save Money"
              description="Avoid random overuse and keep fertilizer decisions targeted to actual crop need."
              tone="green"
            />
            <FeatureCard
              title="Soil Health"
              description="Support long-term field balance by keeping the recommendation process clear and measured."
              tone="green"
            />
          </div>

          <div className="formula-panel">
            <div>
              <p className="section-kicker light">Formula</p>
              <h3>F = (NR × T) − (CS × S) / CF</h3>
            </div>
            <p>
              A simplified scientific planning equation that represents the crop need, target yield, soil condition,
              and crop factor in one visual reference.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
