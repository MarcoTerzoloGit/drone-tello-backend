// KEEP old notes about node stream and async for await of


// ffplay -probesize 32 -i udp://@192.168.10.1:11111 -framerate 30

// const fs = require('fs');
// const { Transform } = require('stream');

// const readStream = fs.createReadStream("./testi/file.txt", {
//     encoding: 'utf8', // codifica
//     highWaterMark: 16 // grandezza massima del buffer (usato internamente)
// });

// const writeStream = fs.createWriteStream('./testi/file3.txt');

// const upperCaseTransformStream = new Transform({
//     transform(chunk, encoding, done) {
//         this.push(chunk.toString().toUpperCase());
//         done();
//     }
// });


// readStream.pipe(upperCaseTransformStream).pipe(writeStream);

// /*
// (async () => {

//     for await (const chunk of readStream) {

//         process.stdout.write(chunk.toString().toUpperCase());
//         writeStream.write(chunk.toString().toUpperCase());
//     }

// })();*/


// /*

// const readStream = fs.createReadStream('./video/testVideo.mp4');

// const newFile = fs.createWriteStream('./video/test2.mp4');*/


// // readStream.pipe(newFile);