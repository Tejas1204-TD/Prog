import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CropCard from '../components/CropCard'

const crops = ['Wheat', 'Rice', 'Maize', 'Sugarcane']

function Dashboard() {
  const navigate = useNavigate()
  const [selectedCrop, setSelectedCrop] = useState('Wheat')
  const [formData, setFormData] = useState({
    targetYield: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validate fields (custom, not using browser default validation)
    const fieldNames = {
      selectedCrop: 'Crop',
      targetYield: 'Target Yield',
      nitrogen: 'Nitrogen (N)',
      phosphorus: 'Phosphorus (P)',
      potassium: 'Potassium (K)',
    }

    const newErrors = {}
    if (!selectedCrop || String(selectedCrop).trim() === '') newErrors.selectedCrop = `${fieldNames.selectedCrop} is required.`
    if (!formData.targetYield || String(formData.targetYield).trim() === '') newErrors.targetYield = `${fieldNames.targetYield} is required.`
    if (!formData.nitrogen || String(formData.nitrogen).trim() === '') newErrors.nitrogen = `${fieldNames.nitrogen} is required.`
    if (!formData.phosphorus || String(formData.phosphorus).trim() === '') newErrors.phosphorus = `${fieldNames.phosphorus} is required.`
    if (!formData.potassium || String(formData.potassium).trim() === '') newErrors.potassium = `${fieldNames.potassium} is required.`

    setErrors(newErrors)

    // If any errors, do not proceed and show custom messages
    if (Object.keys(newErrors).length > 0) {
      // keep user on the page; input fields render inline messages
      return
    }

    // All good — navigate to recommendation view
    navigate('/recommendation', {
      state: {
        crop: selectedCrop,
        targetYield: formData.targetYield,
        nitrogen: formData.nitrogen,
        phosphorus: formData.phosphorus,
        potassium: formData.potassium,
      },
    })
  }

  return (
    <div className="dashboard-shell">
      <Navbar />

      <main className="dashboard-content">
        <section className="white-card dashboard-card">
          <p className="section-kicker">Crop Planning</p>
          <h2>Select Crop & Soil Data</h2>

          <div className="crop-grid">
            {crops.map((crop) => (
              <CropCard
                key={crop}
                label={crop}
                selected={selectedCrop === crop}
                onClick={() => setSelectedCrop(crop)}
              />
            ))}
          </div>

          <form className="dashboard-form" onSubmit={handleSubmit}>
            {Object.keys(errors).length > 0 && (
              <div className="form-error">
                You did not fill these fields: {Object.keys(errors).map((k) => {
                  if (k === 'selectedCrop') return 'Crop'
                  return k === 'targetYield' ? 'Target Yield' : k === 'nitrogen' ? 'Nitrogen' : k === 'phosphorus' ? 'Phosphorus' : k === 'potassium' ? 'Potassium' : k
                }).join(', ')}
              </div>
            )}

            <label>
              Target Yield
              <input
                type="text"
                name="targetYield"
                value={formData.targetYield}
                onChange={handleChange}
                placeholder="Enter target yield"
                className={errors.targetYield ? 'invalid' : ''}
              />
              {errors.targetYield && <div className="input-error">{errors.targetYield}</div>}
            </label>
            <label>
              Nitrogen (N)
              <input
                type="text"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                placeholder="Enter nitrogen value"
                className={errors.nitrogen ? 'invalid' : ''}
              />
              {errors.nitrogen && <div className="input-error">{errors.nitrogen}</div>}
            </label>
            <label>
              Phosphorus (P)
              <input
                type="text"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                placeholder="Enter phosphorus value"
                className={errors.phosphorus ? 'invalid' : ''}
              />
              {errors.phosphorus && <div className="input-error">{errors.phosphorus}</div>}
            </label>
            <label>
              Potassium (K)
              <input
                type="text"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                placeholder="Enter potassium value"
                className={errors.potassium ? 'invalid' : ''}
              />
              {errors.potassium && <div className="input-error">{errors.potassium}</div>}
            </label>

            <button type="submit" className="primary-button dashboard-button">
              Get Fertilizer Recommendation
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
