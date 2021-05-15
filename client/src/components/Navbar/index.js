import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About me
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
