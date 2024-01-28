import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
 const childProcess = await fork('./files/script.js', args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1,2,3]);
