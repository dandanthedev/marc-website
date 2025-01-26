import pictures from '$lib/pictures.json';

export async function load({ params }) {
	const concert = pictures.find((concert) => concert.id === params.id);
	if (!concert)
		return {
			concert: null
		};
	return {
		concert
	};
}
