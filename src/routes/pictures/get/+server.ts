import pictures from '$lib/pictures.json';
import { json } from '@sveltejs/kit';
const perPage = 30;

export async function GET({ url }) {
	const params = url.searchParams;
	const rawPage = params.get('page');
	if (!rawPage) {
		return json(
			{ error: 'page is required' },
			{
				status: 400
			}
		);
	}
	const page = parseInt(rawPage);
	if (isNaN(page)) {
		return json(
			{ error: 'page should be a number' },
			{
				status: 400
			}
		);
	}
	const search = params.get('q');
	if (search && typeof search !== 'string') {
		return json(
			{ error: 'q should be a string' },
			{
				status: 400
			}
		);
	}

	const start = (page - 1) * perPage;
	const end = start + perPage;

	const searchResults = pictures.filter((picture) => {
		if (search) {
			return picture.title.toLowerCase().includes(search.toLowerCase());
		}
		return true;
	});

	return json({
		last: searchResults.slice(start, end).length < perPage,
		data: searchResults.slice(start, end)
	});
}
