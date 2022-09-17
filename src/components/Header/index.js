// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-items-container">
      <div className="h-img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="header-img"
        />
        <p className="h-para-1">Wave</p>
      </div>
      <ul className="list-container">
        <li className="list-para">
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li className="list-para">
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li className="list-para">
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
