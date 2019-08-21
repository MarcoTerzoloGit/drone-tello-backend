// DRONE
const dgram = require('dgram');
const wait = require('waait');
const commandDelays = require('./commandDelays.js');

//// SERVER
const cv = require('opencv4nodejs');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// OTHER
const throttle = require('./throttle')





const PORTS = {
    DRONE_COMMANDS_PORT: 8889,
    DRONE_STATUS_PORT: 8890,
    DRONE_STREAM_VIDEO_PORT: 11111
}

const HOST = '192.168.10.1'; 

// Socket for drone controls
const drone = dgram.createSocket('udp4');
drone.bind(PORTS.DRONE_COMMANDS_PORT);

// drone status
const droneStatus = dgram.createSocket('udp4');
droneStatus.bind(PORTS.DRONE_STATUS_PORT);
droneStatus.on('message', (message) => {

  // TODO: to be throttled

	const parsedMessage = `${message}`
	.split(';')
	.map(item => item.split(':'))
	.reduce((acc, cur) => {
		acc[cur[0]] = cur[1];
		return acc;
	}, {})
	// console.log(`parsed message from drone >>> `, parsedMessage);

	io.emit('stats', parsedMessage)
})

// const droneStreaming = dgram.createSocket('udp4');
// droneStreaming.bind(PORTS.DRONE_STREAM_VIDEO_PORT);
// droneStreaming.on('message', (streaming) => console.log(`streaming from drone >>> `)); // ${streaming}



// drone commands
drone.on('message', (message) => console.log(`message from drone >>> ${message}`));


const returnCompositeCommand = (index, commandList) => {
    const command = commandList[index][0];
    const value = commandList[index][1] ? ` ${commandList[index][1]}`: '';
    const delay = commandDelays[command];

    return {
        action: `${command}${value}`,
        delay
    };
}

const commands = [ 
    ['command'], 
    ['battery?'],
    ['streamon'],
    // ['takeoff'],
    // ['forward', '50'],
    // ['flip', 'l'],
    // ['flip', 'r'],
    // ['back', '50'],
    // ['land']
]

let i = 0;

/**
 * loop to handle the commands sent to drone
 */
async function runDronePrograms() {
    
    const compositeCommand = returnCompositeCommand(i, commands)
    
    
    console.log(`running drone program >>> ${compositeCommand.action}<`);
    
    drone.send(
        compositeCommand.action,
        0,
        compositeCommand.action.length,
        PORTS.DRONE_COMMANDS_PORT,
        HOST,
        handleError
    );
    
    await wait(compositeCommand.delay);
    i++;
    if (i < commands.length){
        return runDronePrograms();
    }
    console.log(`all command's done, last executed command was >>> ${compositeCommand.action}`)
}

runDronePrograms();



/**
 * Function to handle errors from drone response
 * @param {*} error 
 */
function handleError(error){
    if(error === 'error'){
        console.log('>>error<<');
        console.log(error);
        console.log('>>>end<<<')
        drone.send(
            'emergency',
            0,
            9,
            PORTS.DRONE_COMMANDS_PORT,
            HOST,
            handleError
        )
    }
}





io.on('connection', (socket) => {
	console.log('socket.id', socket.id)
})

server.listen(9700, () => console.log('Example app listening on port 9700!' ));

app.get('/', (req, res) => 
	res.sendFile(path.join(__dirname, './public/index.html'))
);

setTimeout(() => {

	// config
	const FPS = 30;

	const wCap = new cv.VideoCapture('udp://192.168.10.1:11111')

	wCap.set(cv.CAP_PROP_BUFFERSIZE, 3);
	wCap.set(cv.CAP_PROP_POS_FRAMES, 500);

	// resize
	wCap.set(cv.CAP_PROP_FRAME_WIDTH, 450);
	wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 300);

	setInterval(() => {
		try {
			const frame = wCap.read();
			const image = cv.imencode('.jpg', frame).toString('base64');
			io.emit('image', image)
		} catch (error) {
			console.log('error', error)
		}
		
	}, 100);

}, 7000)





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

