import Logo from '../assets/little lemon.jpg'
import Instagram from '../assets/insta_logo.png'
import FaceBook from '../assets/facebook_logo.png'
import YouTube from '../assets/yt_logo.png'

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="entry1">
                    <img src={Logo} width="200px" height="70px" />
                    <div>
                        <ul className="socials">
                            <li><img src={FaceBook} /></li>
                            <li><img src={Instagram} /></li>
                            <li><img src={YouTube} /></li>
                        </ul>
                    </div>
                </div>
                <div className="entry2">
                    <div>
                        <ul className="about">
                            <li className="footer-heading">
                                <span>NAVIGATE</span>
                            </li>
                            <li>Help</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                        <div>
                            <ul className="about">
                            <li className="footer-heading">
                                <span>MORE</span>
                            </li>
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>Articles</li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
                <div></div>
                <div className="entry4">
                    <p>2025 Little Lemon. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}