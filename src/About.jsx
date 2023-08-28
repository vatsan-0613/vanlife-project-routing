import Header from "./Header"
import Footer from "./Footer"
import aboutHero from "./assets/about-hero.jpg"


export default function About(){
    return(
        <div>
            <img className="about-hero" src={aboutHero} alt="" />
            <div className="main-content">
                <h2 className="about-title">Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p className="about-para">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>
                <p className="about-para">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="card">
                <p className="card-text">Your destination is waiting.
Your van is ready.</p>
                <button className="find-btn explore-btn">Explore our Vans</button>
            </div>
        </div>
            

    )
}