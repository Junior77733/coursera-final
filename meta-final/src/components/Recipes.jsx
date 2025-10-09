import Caponata from '../assets/caponata.webp'
import RomanGrilledLamb from '../assets/Roman Grilled Lamb.webp'
import VealMarsala from '../assets/veal-marsala.webp'

export default function Recipes() {

    return (
        <>
            <section>
                <h1 className="top-recipes">Top Recipes</h1>

                <div className="container">
                    <div className="image-container">
                        <img src={Caponata} />
                    </div>
                
                    <div className="content-container">
                        <div><h1 className="title-card">Caponata</h1></div>

                        <div className="tags">
                            <span className="tag-text">Vegan</span>
                            <span className="tag-text">Gluten-free</span>
                        </div>

                        <div className="card-description">
                            <p>A zesty Sicilian caponata of eggplant, tomatoes, and olives, cooked in a tangy sweet and sour sauce.</p>
                        </div>

                        <div className="cta-section">
                            <span className="price">$6:99</span>
                            <button className="order-button">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="image-container">
                        <img src={RomanGrilledLamb} />
                    </div>
                
                    <div className="content-container">
                        <div><h1 className="title-card">Roman Grilled Lamb</h1></div>

                        <div className="tags">
                            <span className="tag-text">Main Dish</span>
                            <span className="tag-text">Party Food</span>
                        </div>

                        <div className="card-description">
                            <p>Flame-grilled lamb chops infused with garlic and rosemary. A fast, flavorful recipe perfect for the grill.</p>
                        </div>

                        <div className="cta-section">
                            <span className="price">$19:99</span>
                            <button className="order-button">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="image-container">
                        <img src={VealMarsala} />
                    </div>
                
                    <div className="content-container">
                        <div><h1 className="title-card">Veal Marsala</h1></div>

                        <div className="tags">
                            <span className="tag-text">Popular</span>
                            <span className="tag-text">Veal</span>
                        </div>

                        <div className="card-description">
                            <p>A quick and delicious dish of pan-seared veal in a flavorful sauce of Marsala wine and earthy mushrooms. Easy enough for a weeknight, impressive enough for guests.</p>
                        </div>

                        <div className="cta-section">
                            <span className="price">$27:99</span>
                            <button className="order-button">Order Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}