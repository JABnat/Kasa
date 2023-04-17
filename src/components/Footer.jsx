import '../styles/Footer.css'
import logo_footer from '../assets/images/logo_footer.svg'

export default function Footer() {
    return (
<div className="footer_containter">
    <div className="text-container">
<img className="logo-footer" src={logo_footer} alt="Kasa logo"/>
<p className="ARR">© 2020 Kasa. All rights reserved</p>
    </div>
</div>
    )
}