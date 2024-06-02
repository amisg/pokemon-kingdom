export default function PokemonCardComponent(props) {
	const { id, image, name, type } = props;
	return (
		<>
			<div className="card-container">
				<div className="number">{id}</div>
				<img src={image} alt="pokemonImage" />
				<div className="detail-wrapper">
					<h3>{name}</h3>
					<p>Type: {type}</p>
				</div>
			</div>
		</>
	);
}
