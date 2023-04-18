import '../styles/Error.css';
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error-page">
            <h1 className="error-title">404</h1>
                <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                    <Link to='/' className="error-link">Retourner sur la page d'accueil</Link>
        </div>
        )
}