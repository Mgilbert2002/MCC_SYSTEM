import { useState } from 'react'
import './HomePage.css'

function HomePage() {
  const [activeModule, setActiveModule] = useState('reception')
  const [showNewDelivery, setShowNewDelivery] = useState(false)

  const handleNewDelivery = () => {
    setShowNewDelivery(true)
  }

  const handleCloseDelivery = () => {
    setShowNewDelivery(false)
  }

  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="main-content">
          {activeModule === 'reception' && (
            <div className="module reception-module">
              <h3>Row milk reception</h3>
              <div className="module-actions">
                <button className="action-btn new-delivery" onClick={handleNewDelivery}>
                  New delivery
                </button>
                <button className="action-btn history">
                  History
                </button>
              </div>
            </div>
          )}

          {activeModule === 'sales' && (
            <div className="module sales-module">
              <h3>Product sale</h3>
              <div className="module-actions">
                <button className="action-btn new-sales">
                  New sales
                </button>
                <button className="action-btn history">
                  History
                </button>
              </div>
            </div>
          )}

          {activeModule === 'communication' && (
            <div className="module communication-module">
              <h3>Communication</h3>
              <div className="module-actions">
                <button className="action-btn chart">
                  Chart
                </button>
                <button className="action-btn announcement">
                  Announcement
                </button>
              </div>
            </div>
          )}

          {activeModule === 'operator' && (
            <div className="module operator-module">
              <h3>Operator account</h3>
              <div className="account-info">
                <p>Operator: System Administrator</p>
                <p>Session: Active</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="cows-section">
          <img src="/cows1.jpg" alt="Dairy Cows" className="cows-image" />
          <div className="cows-description">
            <h3>Quality Milk Source</h3>
            <p>Our dairy cows are carefully raised and monitored to ensure the highest quality milk production. Each cow is tagged and tracked throughout the milking process, maintaining traceability and quality standards from farm to collection center.</p>
            <div className="cows-stats">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Healthy Cows</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2,500L</span>
                <span className="stat-label">Daily Production</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality Checked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Delivery Modal */}
      {showNewDelivery && (
        <div className="delivery-modal-overlay">
          <div className="delivery-modal">
            <div className="delivery-header">
              <h2>New Milk Delivery</h2>
              <button className="close-btn" onClick={handleCloseDelivery}>×</button>
            </div>
            
            <div className="delivery-content">
              <div className="delivery-form">
                <div className="form-left">
                  <div className="form-group">
                    <label htmlFor="farmerId">Farmer ID</label>
                    <input type="text" id="farmerId" placeholder="Enter farmer ID" />
                  </div>
                </div>
                
                <div className="form-right">
                  <div className="form-group">
                    <label htmlFor="deliveryPerson">Delivery Person Name</label>
                    <input type="text" id="deliveryPerson" placeholder="Enter delivery person name" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="deliveryTime">Delivery Time</label>
                    <input type="time" id="deliveryTime" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="deliveryDate">Delivery Date</label>
                    <input type="date" id="deliveryDate" />
                  </div>
                </div>
              </div>
              
              <div className="delivery-actions">
                <button className="btn-cancel" onClick={handleCloseDelivery}>Cancel</button>
                <button className="btn-next">Next &gt;&gt;</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
