import { Link } from "react-router-dom";


export default function Header(){
    return(
        <header className="header">
            <h3><Link to="/">#VANLIFE</Link></h3>
            <p className="about-header"><Link to="/about">About</Link></p>
            <p className="about-header"><Link to="/vans">Vans</Link></p>
        </header>
    )
}