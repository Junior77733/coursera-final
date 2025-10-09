
export default function NavBar({btnData}) {

    return (
        <div>
            <nav className="desktop-nav">
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Order</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            {
                btnData &&
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Order</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
            }
        </div>
    )
}