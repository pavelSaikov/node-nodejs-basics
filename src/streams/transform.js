import {Transform} from "stream";

class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        try {
            const resultString = chunk.toString('utf8').split('').reverse().join('') +'\n';

            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}

const transform = async () => {
   const transformStream = new ReverseTransform();

   process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();