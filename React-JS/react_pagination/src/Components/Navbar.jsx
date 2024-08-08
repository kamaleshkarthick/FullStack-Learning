import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <ul>
            
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="CONTACT">Contact</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
