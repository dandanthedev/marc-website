import fs from 'fs';
import cuid from 'cuid';
const folders = fs.readdirSync('./static/publications');

const data = [];

for (const folder of folders) {
	const files = fs.readdirSync('./static/publications/' + folder);
    data.push({
        id: cuid(),
        title: folder,
        pictures: files.map((file) => {
            return {
                id: cuid(),
                url: '/publications/' + folder + '/' + file
            }
        })
    });
}

fs.writeFileSync('data.json', JSON.stringify(data, null, 2));