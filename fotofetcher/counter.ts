import fs from 'fs';

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

console.log(data.length, "concerts");

let count = 0;

for (const concert of data) {
    count += concert.photos.length;
}

console.log(count, "photos");