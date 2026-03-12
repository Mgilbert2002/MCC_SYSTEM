import { useState } from 'react'
import './CommunicationPage.css'

function CommunicationPage() {
  const [activeModule, setActiveModule] = useState('communication')

  return (
    <div className="communication-page">
      <div className="communication-content">
        <div className="main-content">
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
        </div>
        
        <div className="cows-section">
          <img src="/cows1.jpg" alt="Dairy Cows" className="cows-image" />
          <div className="cows-description">
            <h3>Effective Communication System</h3>
            <p>Our communication system ensures seamless information flow between farmers, collection centers, and processing facilities. Real-time updates, announcements, and data visualization help maintain transparency and efficiency throughout the milk supply chain.</p>
            <div className="cows-stats">
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">System Uptime</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Daily Messages</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Delivery Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunicationPage
