import puppeteer from 'puppeteer';
import fs from 'fs';

const data: any[] = [];

const amountOfTimes = 10;
const amountPerX = 10;

for (let i: number = 0; i < amountOfTimes; i++) {
	const browser = await puppeteer.launch({
		headless: false
	});
	console.log('page ', i * amountPerX + 1, 'to', i * amountPerX + amountPerX);
	await Promise.all(
		Array.from({ length: amountPerX }, async (_, i2) => {
			const page = await browser.newPage();
			await page.goto(
				`https://www.vera-groningen.nl/photos/page/${i * amountPerX + i2 + 1}?category=marc-de-krosse`
			);

			//find all a tags with rel="artworks"
			const artworks = await page.$$('a[rel="artworks"]');

			const mappedArtworks = await Promise.all(
				artworks.map(async (artwork) => {
					const href = await artwork.getProperty('href');
					const actualHref = await href.jsonValue();

					const title = await artwork.getProperty('title');
					const actualTitle = await title.jsonValue();
					return {
						title: actualTitle.replace(' - Vera', ''),
						href: actualHref
					};
				})
			);

			//loop through all artworks
			for (const artwork of mappedArtworks) {
				console.log('artwork ', artwork.title);

				//open page
				await page.goto(artwork.href);

				//if page contains p with text "Pagina niet gevonden"
				if (await page.$('p:contains("Pagina niet gevonden")').catch(() => null)) {
					console.log('pagina niet gevonden');
					continue;
				}

				//wait until a tag with rel photos is loaded
				const res = await page
					.waitForSelector('a[rel="photos"]')
					.catch(() => null)
					.then(() => true);
				if (!res) {
					console.log('no photos');
					continue;
				}
				data.push({
					title: await page.title(),
					photos: [] as any[]
				});

				//find all a tags with rel="photos"
				const photos = await page.$$('a[rel="photos"]');

				//loop through all photos
				for (const photo of photos) {
					const href = await photo.getProperty('href');
					const actualHref = await href.jsonValue();
					const title = await photo.getProperty('title');
					const actualTitle = await title.jsonValue();

					data[data.length - 1].photos.push({
						title: actualTitle,
						href: actualHref
					});
				}
			}
		})
	);

	await browser.close();
}
fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
