import emptyStar from "../assets/images/emptyStar.svg";
import fullStar from "../assets/images/filledStar.svg";
import "../styles/HostRating.css"

export default function StarRating({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="starRating">
			{stars.map((rating) =>
				score >= rating ? (
					<img
						key={rating.toString()}
						className="star"
						src={fullStar}
						alt="star rating"
					/>
				) : ( 
					<img
						key={rating.toString()}
						className="star"
						src={emptyStar}
						alt="star rating"
					/>
				)
			)}
		</div>
	);
}