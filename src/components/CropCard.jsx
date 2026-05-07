function CropCard({ label, selected, onClick }) {
  return (
    <button type="button" className={`crop-card${selected ? ' selected' : ''}`} onClick={onClick}>
      <span className="crop-icon" aria-hidden="true">
        {label.slice(0, 1)}
      </span>
      <span className="crop-label">{label}</span>
    </button>
  )
}

export default CropCard
