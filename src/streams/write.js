import {createWriteStream} from 'fs';

const write = async () => {
    const writeStream = createWriteStream('files/fileToWrite.txt');
    process.stdin.pipe(writeStream);
};

await write();