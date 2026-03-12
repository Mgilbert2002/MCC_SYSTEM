import { useState } from 'react'
import './SalesPage.css'

function SalesPage() {
  const [activeModule, setActiveModule] = useState('sales')

  return (
    <div className="sales-page">
      <div className="sales-content">
        <div className="main-content">
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
        </div>
        
        <div className="cows-section">
          <img src="/cows1.jpg" alt="Dairy Cows" className="cows-image" />
          <div className="cows-description">
            <h3>Quality Milk Products</h3>
            <p>Our dairy products are made from the highest quality milk collected from our trusted farmers. Each product undergoes strict quality control to ensure freshness, taste, and nutritional value. From fresh milk to cheese and butter, we offer a complete range of dairy products for our customers.</p>
            <div className="cows-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Product Types</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Daily Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesPage
