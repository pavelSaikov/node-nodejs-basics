import {readFile, stat} from 'fs/promises';

const read = async () => {
    try {
        await stat('files/fileToRead.txt');
    } catch (error) {
        throw new Error('FS operation failed');
    }

    const fileContents = await readFile('files/fileToRead.txt', 'utf8');
    console.log(fileContents);
};

await read();