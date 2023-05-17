import { Link } from "react-router-dom";

export default function Header (props) {
    return(
        <header>
            <h1 className="header">Booklit</h1>
            <nav className="nav">
                <Link to="/browse">Browse Books</Link>
                &nbsp;
                <Link to="/">Home</Link>
                &nbsp;
                <Link to="/search">Search Books</Link>
            </nav>
        </header>
    );
}