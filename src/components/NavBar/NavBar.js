import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to='/'>Home</Link>
        </nav>
    )
}
export default NavBar;
