import * as fs from 'fs/promises';
import path  from 'path';

const rename = async () => {
    const oldPath = path.join('files', 'wrongFilename.txt');

    try {
        await fs.stat(oldPath)
    } catch (error) {
        throw new Error('FS operation failed');
        return
    }

    const newPath = path.join('files', 'properFilename.md');

    let stats = null;

    try {
        stats = await fs.stat(newPath);
    } catch (error) {}

    if (stats?.isFile()) {
        throw new Error('FS operation failed');
    }


    await fs.rename(oldPath, newPath);


};

await rename();