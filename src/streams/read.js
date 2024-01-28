import {createReadStream} from "fs";

const read = async () => {
    const readStream = createReadStream('files/fileToRead.txt');
    readStream.pipe(process.stdout);
};

await read();