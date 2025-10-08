import { useState } from 'react'
import logo from '../assets/little lemon.jpg'
import menu_icon from '../assets/burger_icon.png'
import NavBar from './NavBar'


export default function Header() {

    const [dropBtn, setDropBtn] = useState(false)

    const toggleNavigation = () => {
        setDropBtn(!dropBtn)
    }
    
    return (
        <>
            <header>
                <img src={logo} width='200px'/>
                <button className="mobile-btn" onClick={toggleNavigation}>
                    <img src={menu_icon} width='30px'/>
                </button>
            </header>
            <NavBar btnData={dropBtn}/>
        </>
    )
}