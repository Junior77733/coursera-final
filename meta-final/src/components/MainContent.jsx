import MenuBG from '../assets/menu-bg.jpg'
import Recipes from './Recipes'

export default function MainContent() {

    return (
        <>
        <main>
            <div className='reserve-table'>
                <img src={MenuBG} />
                <div className='bannerText'>
                    <h1>
                        <span className='first-line'>GOOD TASTE</span>
                        <br/>
                        <span className='second-line'>IS THE ENEMY OF</span>
                        <br/>
                        <span className='third-line'>CREATIVITY</span>
                    </h1>
                </div>
                <p className='mobile-banner-sub-text'>
                    We believe that food is more than just sustenance,
                    <br />
                    It is an experience. Our menu features a variety
                    <br />
                    of dishes that are expertly prepared with fresh,
                    <br />
                    locally sourced ingredients and served in a warm
                    <br />
                    and inviting atmosphere
                </p>
                <p className='desktop-banner-sub-text'>
                    We believe that food is more than just sustenance,
                    <br />
                    It is an experience. Our menu features a variety
                    <br />
                    of dishes that are expertly prepared with fresh,
                    <br />
                    locally sourced ingredients and served in a warm
                    <br />
                    and inviting atmosphere
                </p>
                <button className='mobile-reserve-btn'>Reserve a Table</button>
                <button className='desktop-reserve-btn'>Reserve a Table</button>
            </div>
        </main>
        <div>
            <Recipes />
        </div>
        </>
    )
}