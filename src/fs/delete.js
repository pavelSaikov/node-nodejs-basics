import {stat, unlink} from 'fs/promises';

const remove = async (fileToRemove) => {
    let stats = null;

    try {
        stats = await stat('files/fileToRemove.txt');
    } catch (error) {
    }

    if (!stats?.isFile()) {
        throw new Error('FS operation failed');
    }

    await unlink('files/fileToRemove.txt');
};

await remove();