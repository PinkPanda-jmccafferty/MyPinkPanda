// Imports
import { Link } from 'react-router-dom'
// Styles & images
import './Navbar.css'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'

export default function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li className="logo">
                <img src={logo} alt="Pink Panda Logo"/>
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><img src={cart} alt="Cart Icon"/></li>

        </ul>
    </div>
  )
}
