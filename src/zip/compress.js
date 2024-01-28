import { createGzip } from 'node:zlib';
import  {
    createReadStream,
    createWriteStream,
} from 'node:fs';
const compress = async () => {
const readStream = createReadStream('files/fileToCompress.txt');
const writeStream = createWriteStream('files/archive.gz');
const gzip = createGzip();

readStream.pipe(gzip).pipe(writeStream);
};

await compress();