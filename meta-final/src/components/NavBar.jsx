import { useState } from 'react'
import dropdown from '../assets/drop-down-arrow.png'

export default function NavBar() {

    const [isOpen, setMenu] = useState(false)

    const toggleDropdown = () => {
        setMenu(!isOpen)
    }

    return (
        <div>
            <button className="dropdown-btn" onClick={toggleDropdown}>
                <img src={dropdown} width="20px" height="20px"/>
            </button>
            {isOpen && 
                <nav className="popup-nav">
                <ul className="nav-list">
                    <li><a>Home</a></li>
                    <li><a>Order</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            }
        </div>
    )
}