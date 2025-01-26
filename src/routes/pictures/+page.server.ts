import pictures from '$lib/pictures.json';
import { _perPage } from './get/+server';
export async function load() {
	const initialConcerts = pictures.slice(0, _perPage);
	const mappedPics = initialConcerts.reduce(
		(acc, concert) => {
			acc[concert.id] = concert.photos[Math.floor(Math.random() * concert.photos.length)];
			return acc;
		},
		{} as { [key: string]: string }
	);

	return {
		initialConcerts,
		initialMappedPics: mappedPics
	};
}
