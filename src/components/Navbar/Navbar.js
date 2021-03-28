import {Link} from 'react-router-dom';
import Woodyicon from '../../Assets/Woodyicon.jpg';
import './Navbar.css';

const Navbar = () => {

    return(
        <nav className="nav">
                <ul className="nav-links">
                  <li>
                    <Link to="/category/collares">Collares</Link>
                  </li>
                  <li>
                    <Link to="/category/ropa">Ropa</Link>
                  </li>
                  <li>
                    <Link to="/category/alimento">Alimento</Link>
                  </li>
                  <li>
                    <Link to="/category/accesorios">Accesorios</Link>
                  </li>
                </ul>
                
                <Link to="/">
                  <img src={Woodyicon} className="logo"></img>
                </Link>

                <div>
                  <i className="fas fa-user" id="user"></i>
                  <i className="fas fa-shopping-bag" id="bag"></i>
                </div>
              </nav>
    )
}

export default Navbar;