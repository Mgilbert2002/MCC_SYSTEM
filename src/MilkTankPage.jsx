import { useState } from 'react'
import './MilkTankPage.css'

function MilkTankPage() {
  const [tankLevel, setTankLevel] = useState(500)
  const [receivedMilk, setReceivedMilk] = useState('')
  const [soldMilk, setSoldMilk] = useState('')
  const [defaultDate, setDefaultDate] = useState(new Date().toISOString().split('T')[0])

  const tankCapacity = 1000
  const tankPercentage = (tankLevel / tankCapacity) * 100

  const handleReceiveMilk = () => {
    const amount = parseFloat(receivedMilk)
    if (!isNaN(amount) && amount > 0) {
      const newLevel = Math.min(tankLevel + amount, tankCapacity)
      setTankLevel(newLevel)
      setReceivedMilk('')
    }
  }

  const handleSellMilk = () => {
    const amount = parseFloat(soldMilk)
    if (!isNaN(amount) && amount > 0 && amount <= tankLevel) {
      const newLevel = tankLevel - amount
      setTankLevel(newLevel)
      setSoldMilk('')
    }
  }

  const getTankColor = () => {
    if (tankPercentage > 80) return '#27ae60'
    if (tankPercentage > 30) return '#f39c12'
    return '#e74c3c'
  }

  return (
    <div className="milk-tank-page">
      <div className="tank-header">
        <h2>Milk Tank Kg/L Management</h2>
        <div className="date-section">
          <label htmlFor="defaultDate">Default by date (every day)</label>
          <input 
            type="date" 
            id="defaultDate" 
            value={defaultDate}
            onChange={(e) => setDefaultDate(e.target.value)}
          />
        </div>
      </div>

      <div className="tank-visualization">
        <div className="tank-container">
          <div className="tank">
            <div 
              className="milk-level"
              style={{ 
                height: `${tankPercentage}%`,
                backgroundColor: getTankColor()
              }}
            ></div>
            <div className="tank-labels">
              <span className="current-level">{tankLevel}L</span>
              <span className="capacity">{tankCapacity}L</span>
            </div>
          </div>
        </div>

        <div className="tank-info">
          <h3>Current Tank Status</h3>
          <div className="status-grid">
            <div className="status-item">
              <label>Current Volume:</label>
              <span className="value">{tankLevel} Liters</span>
            </div>
            <div className="status-item">
              <label>Tank Capacity:</label>
              <span className="value">{tankCapacity} Liters</span>
            </div>
            <div className="status-item">
              <label>Available Space:</label>
              <span className="value">{tankCapacity - tankLevel} Liters</span>
            </div>
            <div className="status-item">
              <label>Fill Percentage:</label>
              <span className="value">{tankPercentage.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MilkTankPage
