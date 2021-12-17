import { Link } from "react-router-dom";
import styles from "./styles.css";
const Header = () => {
  return (
    <div>
      <span clasName="header">React Context API Tut</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
