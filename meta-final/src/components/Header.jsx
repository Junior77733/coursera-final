import logo from '../assets/little lemon.jpg'
import menu_icon from '../assets/burger_icon.png'
import NavBar from './NavBar'


export default function Header() {
    
    return (
        <>
            <header className="header-logo">
                <img src={logo} width='200px'/>
                <button><img src={menu_icon} width='30px'/></button>
            </header>
            <NavBar />
        </>
    )
}