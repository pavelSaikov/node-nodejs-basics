import {stat, mkdir, copyFile, readdir} from 'fs/promises';
import path from 'path';

const copy = async () => {
    try {
        await stat('files');
    } catch (error) {
        throw new Error('FS operation failed');
    }

    let stats = null;

    try {
        stats = await stat('files_copy');
    } catch (error) {}

    if (stats?.isDirectory()) {
        throw new Error('FS operation failed');
    }

    const files_copy = path.join('files_copy');
    await mkdir(files_copy, {recursive: true});

    const files = await readdir('files');

    await Promise.all(files.map(async (file) => {
        const source = path.join('files', file);
        const destination = path.join(files_copy, file);
        await copyFile(source, destination);
    }));


};

await copy();