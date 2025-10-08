
export default function NavBar({btnData}) {

    return (
        <div>
            <nav className="desktop-nav">
                <ul className="nav-list">
                    <li><a>Home</a></li>
                    <li><a>Order</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            {
                btnData &&
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
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