function FeatureCard({ title, description, tone = 'default' }) {
  return (
    <article className={`feature-card tone-${tone}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
