import { useState } from 'react'
import './DeliveryDetailsPage.css'

function DeliveryDetailsPage() {
  const [formData, setFormData] = useState({
    appearance: '',
    smell: '',
    taste: '',
    appearanceFail: '',
    smellFail: '',
    tasteFail: '',
    overallResult: '',
    showPassForm: false,
    temperature: '',
    lactometer: '',
    acidityTest: '',
    antibioticTest: '',
    qualityResult: ''
  })

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value})
  }

  const calculateTotal = () => {
    const quantity = parseFloat(formData.quantity) || 0
    const price = parseFloat(formData.pricePerLiter) || 0
    return (quantity * price).toFixed(2)
  }

  const handlePreCheck = () => {
    console.log('Pre-check clicked')
    console.log('Current test data:', formData)
    // Validate that all fields are filled
    if (!formData.appearance || !formData.smell || !formData.taste) {
      alert('Please complete all test fields before pre-check')
      return
    }
    alert('Pre-check completed. All tests validated.')
  }

  const handleFail = () => {
    // Collect all test information
    const testResults = {
      appearance: formData.appearance,
      smell: formData.smell,
      taste: formData.taste,
      appearanceIssues: formData.appearanceFail,
      smellIssues: formData.smellFail,
      tasteIssues: formData.tasteFail,
      timestamp: new Date().toISOString(),
      result: 'FAIL'
    }
    
    console.log('Test Results (FAIL):', testResults)
    setFormData({...formData, overallResult: 'fail'})
    
    // Show confirmation with all details
    alert(`TEST RESULT: FAIL\n\nTest Details:\n- Appearance: ${formData.appearance}${formData.appearanceFail ? ` (${formData.appearanceFail})` : ''}\n- Smell: ${formData.smell}${formData.smellFail ? ` (${formData.smellFail})` : ''}\n- Taste: ${formData.taste}${formData.tasteFail ? ` (${formData.tasteFail})` : ''}\n\nResult recorded successfully.`)
  }

  const handlePass = () => {
    // Collect all test information
    const testResults = {
      appearance: formData.appearance,
      smell: formData.smell,
      taste: formData.taste,
      appearanceIssues: formData.appearanceFail,
      smellIssues: formData.smellFail,
      tasteIssues: formData.tasteFail,
      timestamp: new Date().toISOString(),
      result: 'PASS'
    }
    
    console.log('Test Results (PASS):', testResults)
    setFormData({...formData, overallResult: 'pass', showPassForm: true})
    
    // Show confirmation with all details
    alert(`TEST RESULT: PASS\n\nTest Details:\n- Appearance: ${formData.appearance}${formData.appearanceFail ? ` (${formData.appearanceFail})` : ''}\n- Smell: ${formData.smell}${formData.smellFail ? ` (${formData.smellFail})` : ''}\n- Taste: ${formData.taste}${formData.tasteFail ? ` (${formData.tasteFail})` : ''}\n\nResult recorded successfully.\n\nAdditional form opened on the right side.`)
  }

  const handleSubmitAdditionalInfo = () => {
    const additionalInfo = {
      batchNumber: formData.batchNumber,
      storageLocation: formData.storageLocation,
      qualityInspector: formData.qualityInspector,
      additionalNotes: formData.additionalNotes,
      timestamp: new Date().toISOString()
    }
    
    console.log('Additional Info Submitted:', additionalInfo)
    alert('Additional information submitted successfully!')
  }

  const handleNextStep = () => {
    const qualityTestData = {
      temperature: formData.temperature,
      lactometer: formData.lactometer,
      acidityTest: formData.acidityTest,
      antibioticTest: formData.antibioticTest,
      timestamp: new Date().toISOString()
    }
    
    console.log('Quality Test Data:', qualityTestData)
    alert('Quality test completed successfully!\n\nTest Results:\n- Temperature: ${formData.temperature}°C\n- Lactometer: ${formData.lactometer}L\n- Acidity: ${formData.acidityTest}\n- Antibiotic: ${formData.antibioticTest.toUpperCase()}\n\nMoving to next step...')
  }

  return (
    <div className="delivery-details-page">
      <div className="delivery-details-container">
        <div className="organoleptic-form">
          <h3>Organoleptic test</h3>
          <div className="test-fields-container">
            <div className="test-field-structured">
              <div className="field-header">
                <span className="field-name">Appearance</span>
                <div className="field-status">
                  <button 
                    type="button" 
                    className={`status-btn good ${formData.appearance === 'good' ? 'active' : ''}`}
                    onClick={() => handleInputChange('appearance', 'good')}
                  >
                    Good
                  </button>
                  <button 
                    type="button" 
                    className={`status-btn bad ${formData.appearance === 'bad' ? 'active' : ''}`}
                    onClick={() => handleInputChange('appearance', 'bad')}
                  >
                    Bad
                  </button>
                </div>
              </div>
              {formData.appearance === 'bad' && (
                <div className="field-details">
                  <input
                    type="text"
                    placeholder="Enter appearance issues..."
                    value={formData.appearanceFail}
                    onChange={(e) => handleInputChange('appearanceFail', e.target.value)}
                    className="detail-input"
                  />
                </div>
              )}
            </div>

            <div className="test-field-structured">
              <div className="field-header">
                <span className="field-name">Smell</span>
                <div className="field-status">
                  <button 
                    type="button" 
                    className={`status-btn good ${formData.smell === 'good' ? 'active' : ''}`}
                    onClick={() => handleInputChange('smell', 'good')}
                  >
                    Good
                  </button>
                  <button 
                    type="button" 
                    className={`status-btn bad ${formData.smell === 'bad' ? 'active' : ''}`}
                    onClick={() => handleInputChange('smell', 'bad')}
                  >
                    Bad
                  </button>
                </div>
              </div>
              {formData.smell === 'bad' && (
                <div className="field-details">
                  <input
                    type="text"
                    placeholder="Enter smell issues..."
                    value={formData.smellFail}
                    onChange={(e) => handleInputChange('smellFail', e.target.value)}
                    className="detail-input"
                  />
                </div>
              )}
            </div>

            <div className="test-field-structured">
              <div className="field-header">
                <span className="field-name">Taste</span>
                <div className="field-status">
                  <button 
                    type="button" 
                    className={`status-btn good ${formData.taste === 'good' ? 'active' : ''}`}
                    onClick={() => handleInputChange('taste', 'good')}
                  >
                    Good
                  </button>
                  <button 
                    type="button" 
                    className={`status-btn bad ${formData.taste === 'bad' ? 'active' : ''}`}
                    onClick={() => handleInputChange('taste', 'bad')}
                  >
                    Bad
                  </button>
                </div>
              </div>
              {formData.taste === 'bad' && (
                <div className="field-details">
                  <input
                    type="text"
                    placeholder="Enter taste issues..."
                    value={formData.tasteFail}
                    onChange={(e) => handleInputChange('tasteFail', e.target.value)}
                    className="detail-input"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons Under Form */}
          <div className="form-actions-bottom">
            <button type="button" className={`btn-fail ${formData.overallResult === 'fail' ? 'active' : ''}`} onClick={handleFail}>
              FAIL
            </button>
            <button type="button" className={`btn-pass ${formData.overallResult === 'pass' ? 'active' : ''}`} onClick={handlePass}>
              PASS
            </button>
          </div>
        </div>

        {/* Additional Form on Right Side - Only Shows When PASS is Clicked */}
        {formData.showPassForm && (
          <div className="additional-form-right">
            <h3>Quality test</h3>
            <div className="additional-form-content">
              <div className="form-group">
                <label>Temperature (°C)</label>
                <input 
                  type="number" 
                  placeholder="Enter temperature..." 
                  value={formData.temperature}
                  onChange={(e) => handleInputChange('temperature', e.target.value)}
                  className="form-input" 
                />
              </div>
              <div className="form-group">
                <label>Lactometer reading (L)</label>
                <input 
                  type="number" 
                  placeholder="Enter lactometer reading..." 
                  value={formData.lactometer}
                  onChange={(e) => handleInputChange('lactometer', e.target.value)}
                  className="form-input" 
                />
              </div>
              <div className="form-group">
                <label>Acidity test</label>
                <input 
                  type="text" 
                  placeholder="Enter acidity test result..." 
                  value={formData.acidityTest}
                  onChange={(e) => handleInputChange('acidityTest', e.target.value)}
                  className="form-input" 
                />
              </div>
              <div className="form-group">
                <label>Antibiotic test</label>
                <div className="button-group">
                  <button 
                    type="button" 
                    className={`option-btn ${formData.antibioticTest === 'negative' ? 'selected' : ''}`}
                    onClick={() => handleInputChange('antibioticTest', 'negative')}
                  >
                    NEGATIVE
                  </button>
                  <button 
                    type="button" 
                    className={`option-btn ${formData.antibioticTest === 'positive' ? 'selected' : ''}`}
                    onClick={() => handleInputChange('antibioticTest', 'positive')}
                  >
                    POSITIVE
                  </button>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn-submit" onClick={handleNextStep}>
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DeliveryDetailsPage
