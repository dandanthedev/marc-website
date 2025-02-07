import fs from 'fs';
import cuid from 'cuid';
import sharp from 'sharp';
const folders = fs.readdirSync('./static/publications');

const data = [];

async function optimize(file){
    const id = cuid();
    console.log(file)
   const image = sharp(file);
   if(!fs.existsSync('./static/publications/webp')) fs.mkdirSync('./static/publications/webp');
   await image.webp({quality: 80}).toFile('./static/publications/webp/' + id + '.webp');
   return "/publications/webp/" + id + ".webp";
}

for (const folder of folders) {
    if(folder === 'webp') continue;
	const files = fs.readdirSync('./static/publications/' + folder);
    const optimizedPictures = [];
    for (const file of files) {
      const optimized = await optimize('./static/publications/' + folder + '/' + file);
      optimizedPictures.push(optimized);
    }
    data.push({
        id: cuid(),
        title: folder,
        pictures: optimizedPictures
    });
}

fs.writeFileSync('data.json', JSON.stringify(data, null, 2));