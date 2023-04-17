import '../styles/Banner.css'
import {useLocation} from 'react-router-dom';


export default function Banner() {
  
  let bannerClass = "banner-accueil"
  let bannerText = "Chez vous, partout et ailleurs"

  if (useLocation().pathname === "/About") {
    bannerClass = "banner-apropos"
    bannerText = ""
  } 

    return (
        <div className={bannerClass}>
          <div className="font-banner">{bannerText}</div>
        </div>
    )
}