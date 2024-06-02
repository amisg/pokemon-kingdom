import { useEffect, useState } from "react";

export default function PokemonKingdomMainPage() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const url =
			"https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";
		async function fetchPokemon(params) {
			setLoading(true);
			const response = await fetch(url);
			let data = await response.json();

			data = data[0];
			// console.log(data, "data");

			const { results = [], name, count } = data;

			for (let i = 0; i < results.length; i++) {
				const pokemonSmallObj = results[i];
				const { url: detailUrl, name } = pokemonSmallObj;
				const response = await fetch(detailUrl);
				const pokemonDetailData = await response.json();
				console.log(pokemonDetailData, ":::NAME:::", name);
				setLoading(false);
			}
		}
		fetchPokemon();
	}, []);

	return (
		<>
			{loading ? (
				<h1>Loading....</h1>
			) : (
				<div>
					<h1>Pokemon Kingdom</h1>
				</div>
			)}
		</>
	);
}
