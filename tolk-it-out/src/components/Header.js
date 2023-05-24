import { Link } from "react-router-dom";

export default function Header (props) {
    return(
        <header>
            <h1 className="header">Tolk It Out</h1>
            <nav className="nav">
                <Link to="/browse">Browse/Search</Link>
                &nbsp;
                <Link to="/">Home</Link>
            </nav>
        </header>
    );
}