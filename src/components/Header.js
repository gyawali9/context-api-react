import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import styles from "./styles.css";
const Header = () => {
  const { cart } = useContext(Cart);

  return (
    <div>
      <span clasName="header">React Context API Operation</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
