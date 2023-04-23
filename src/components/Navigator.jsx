import '../styles/Navigator.css'
import logo from "../assets/logo.svg"
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Navigator() {
  let activePage ="inactivePage"
  let blankLink="inactivePage"
  let currentPage= useLocation().pathname

if (currentPage === "/Kasa/") {
  blankLink = "activePage"
  activePage="inactivePage"
} else if (currentPage === "/about") {
  blankLink="inactivePage"
  activePage="activePage"
}
    return (
        <div className="navigator">
          <img className="logo-nav" src={logo} alt="Kasa logo"/>
            <div className="button-container">
              <Link to='/Kasa/'>
                <div className={blankLink}>Acceuil</div>
              </Link>
              <Link to='/about'>
                <div className={activePage}>A Propos</div>
              </Link>
        </div>
  </div>
  )
};

