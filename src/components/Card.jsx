import '../styles/Card.css';
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {
    return (
        <Link to={`/lodgement/${id}`} className="card">
			<img src={cover} alt={title} />
			<div className="card-title">{title}</div>	
		</Link>
    )
}

