import pictures from '$lib/pictures.json';
import { json } from '@sveltejs/kit';
import { DateTime } from 'luxon';
export const _perPage = 30;
const sortingMethods = ['date', 'title'];

export async function GET({ url, params }) {
	const id = params.id;
    const img = url.searchParams.get('id');
	
    if (!img) {
		return json(
			{ error: 'pic is required' },
			{
				status: 400
			}
		);
	}

    const concert = pictures.find((concert) => concert.id === id);
    if (!concert) {
        return json(
            { error: 'concert not found' },
            {
                status: 404
            }
        );
    }

    const pic = concert.photos.find((pic) => pic.id === img);
    if (!pic) {
        return json(
            { error: 'pic not found' },
            {
                status: 404
            }
        );
    }

    return json(pic);



}
