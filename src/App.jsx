import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import MilkTankPage from './MilkTankPage'
import SalesPage from './SalesPage'
import CommunicationPage from './CommunicationPage'
import OperatorPage from './OperatorPage'
import DeliveryDetailsPage from './DeliveryDetailsPage'

function App() {
  return (
    <div className="mcc-system">
      <header className="system-header">
        <div className="header-content">
          <img src="/system_logo.png" alt="MCC System Logo" className="system-logo" />
          <div className="header-text">
            <h1>Milk collection center(MCC) data recording and processing system</h1>
           
          </div>
        </div>
      </header>

      <nav className="main-nav">
        <Link to="/" className="nav-link">
          Row milk reception
        </Link>
        <Link to="/milk-tank" className="nav-link">
          Milk tank Kg/L
        </Link>
        <Link to="/sales" className="nav-link">
          Product sale
        </Link>
        <Link to="/communication" className="nav-link">
          Communication
        </Link>
        <Link to="/operator" className="nav-link">
          Operator account
        </Link>
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/milk-tank" element={<MilkTankPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/communication" element={<CommunicationPage />} />
          <Route path="/operator" element={<OperatorPage />} />
          <Route path="/delivery-details" element={<DeliveryDetailsPage />} />
        </Routes>
      </main>

      <footer className="system-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Milk Collection Center</h4>
            <p>Providing quality milk collection and processing services since 2026</p>
            <div className="contact-info">
              <p><i className="fas fa-envelope" aria-hidden="true"></i> info@mccsystem.com</p>
              <p><i className="fas fa-phone" aria-hidden="true"></i> +250 78849526</p>
              <p><i className="fas fa-map-marker-alt" ></i> Kigali,Rwanda</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#quality">Quality Standards</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#reception">Milk Reception</a></li>
              <li><a href="#processing">Processing</a></li>
              <li><a href="#quality">Quality Control</a></li>
              <li><a href="#distribution">Distribution</a></li>
              <li><a href="#tracking">Traceability</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com/mcc-system" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com/mcc-system" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com/mcc-system" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com/mcc-system" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <i className="fa-youtube" aria-hidden="true"></i>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Milk Collection Center Data Recording & Processing System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
