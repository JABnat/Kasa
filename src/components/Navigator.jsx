import '../styles/Navigator.css'
import logo from "../assets/logo.svg"
import {useLocation} from 'react-router-dom';


export default function Navigator() {
  let activePage ="inactivePage"
  let blankLink="inactivePage"
  let currentPage= useLocation().pathname

if (currentPage === "/") {
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
              <a href='/'>
                <div className={blankLink}>Acceuil</div>
              </a>
              <a href='/about'>
                <div className={activePage}>A Propos</div>
              </a>
        </div>
      </div>
  )
};