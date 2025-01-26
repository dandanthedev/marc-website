import pictures from '$lib/pictures.json';
import { json } from '@sveltejs/kit';
import { DateTime } from 'luxon';
const perPage = 30;
const sortingMethods = ['date', 'title'];

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
	if (isNaN(page) || page < 1) {
		return json(
			{ error: 'page should be a number greater than 0' },
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

	const sortingMethod = params.get('sort');
	if (!sortingMethod || !sortingMethods.includes(sortingMethod)) {
		return json(
			{ error: 'sort should be one of the following: ' + sortingMethods.join(', ') },
			{
				status: 400
			}
		);
	}

	const order = params.get('order');
	if (!order || !['asc', 'desc'].includes(order)) {
		return json(
			{ error: 'order should be one of the following: asc, desc' },
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

	let sorted = searchResults.sort((a, b) => {
		if (sortingMethod === 'date') {
			if (!a.date && b.date) return -1;
			if (a.date && !b.date) return 1;
			if (!a.date && !b.date) return 0;
			//@ts-ignore
			const aDate = DateTime.fromFormat(a.date, 'dd-MM-yyyy');
			//@ts-ignore
			const bDate = DateTime.fromFormat(b.date, 'dd-MM-yyyy');
			return aDate.diff(bDate).milliseconds;
		}
		if (sortingMethod === 'title') {
			return a.title.localeCompare(b.title);
		}

		return 0;
	});

	if (order === 'desc') sorted = sorted.reverse();

	return json({
		last: searchResults.slice(start, end).length < perPage,
		data: searchResults.slice(start, end)
	});
}
