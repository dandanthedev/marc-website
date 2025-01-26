import data from './data.json';
import fs from 'fs';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

const final = [];

function pad(number: string) {
	const parsed = parseInt(number);
	if (parsed < 10) {
		return '0' + number;
	}
	return number;
}

//remove elements with no photos
for (let i = 0; i < data.length; i++) {
	let mutatableData = data[i];
	if (mutatableData.photos.length === 0) {
		continue;
	}
	//remove - Vera from title
	mutatableData.title = mutatableData.title.replace(' - Vera', '');

	const attribution = mutatableData.photos[0].title;
	const date = attribution.split(' - ')[attribution.split(' - ').length - 2];
	console.log(date);
	const day = pad(date.split('/')[0]);
	const month = pad(date.split('/')[1]);
	const year = date.split('/')[2];
	let newDate: string | null = `${day}-${month}-${year}`;

	if (!year) newDate = null;

	final.push({
		id: uuidv4(),
		title: mutatableData.title,
		date: newDate,
		photos: mutatableData.photos.map((photo) => {
			return photo.href;
		})
	});
}

//sort by latest first, null dates last
const sorted = final
	.sort((a, b) => {
		if (!a.date && b.date) return -1;
		if (a.date && !b.date) return 1;
		if (!a.date && !b.date) return 0;

		//@ts-ignore
		const aDate = DateTime.fromFormat(a.date, 'dd-MM-yyyy');
		//@ts-ignore
		const bDate = DateTime.fromFormat(b.date, 'dd-MM-yyyy');
		return aDate.diff(bDate).milliseconds;
	})
	.reverse();
fs.unlinkSync('data-changed.json');
await new Promise((resolve) => setTimeout(resolve, 1000));
fs.writeFileSync('data-changed.json', JSON.stringify(sorted));
