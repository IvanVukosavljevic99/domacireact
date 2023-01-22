import logo from '../logo.jpg';
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" style={{width:'100px'}}></img>
    </Link>
    
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link active text-light text-uppercase ml-5" aria-current="page" to="/">Početna</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light text-uppercase ml-5" to="/kontakt">Kontakt</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light text-uppercase ml-5" to="/poruci">Naručite Online</Link>
        </li>
      </ul>
    </div>

</nav>
);
};
export default Navbar;