import {createReadStream, createWriteStream} from "node:fs";
import {createUnzip} from "node:zlib";

const decompress = async () => {
    const readStream = createReadStream('files/archive.gz');
    const writeStream = createWriteStream('files/fileToCompress.txt');
    const gzip = createUnzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();