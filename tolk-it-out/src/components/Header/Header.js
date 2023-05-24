import { Link } from "react-router-dom";
import './Header.css'

export default function Header (props) {
    return(
        <header>
            <h1 className="app-name">Tolk It Out</h1>
            <nav className="nav">
                <Link className="nav-links" to="/browse">Browse/Search</Link>
                &nbsp;
                <Link className="nav-links" to="/">Home</Link>
            </nav>
        </header>
    );
}