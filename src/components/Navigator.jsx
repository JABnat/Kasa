import '../styles/Navigator.css'
import logo from "../assets/logo.svg"


export default function Navigator() {
    return (
        <div className="navigator">
          <img className="logo-nav" src={logo} alt="Kasa logo"/>
            <div className="button-container">
              <a href='/'>
                <div className="acceuil-button">Acceuil</div>
              </a>
              <a href='/About'>
                <div className="apropos-button">A Propos</div>
              </a>
        </div>
      </div>
  )
}