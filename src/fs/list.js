import {readdir, stat} from 'fs/promises';

const list = async () => {
    try {
        await stat('files');
    } catch (error) {
        throw new Error('FS operation failed');
    }

    const files = await readdir('files');
    console.log(files);
};

await list();