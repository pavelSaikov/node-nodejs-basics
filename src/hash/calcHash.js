import {createReadStream} from 'fs';
import {createHash} from 'crypto';


const calculateHash = async () => {
    const sha256 = createHash('sha256');
    const readStream = createReadStream('files/fileToCalculateHashFor.txt');

    readStream.pipe(sha256).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();