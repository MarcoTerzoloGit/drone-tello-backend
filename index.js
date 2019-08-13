const dgram = require('dgram');
const wait = require('waait');
const commandDelays = require('./commandDelays.js');






const PORTS = {
    DRONE_COMMANDS_PORT: 8889,
    DRONE_STATUS_PORT: 8890,
    DRONE_STREAM_VIDEO_PORT: 11111
}

const HOST = '192.168.10.1'; 

// Socket for drone controls
const drone = dgram.createSocket('udp4');
drone.bind(PORTS.DRONE_COMMANDS_PORT);

/* const droneStatus = dgram.createSocket('udp4');
droneStatus.bind(PORTS.DRONE_STATUS_PORT); */


// const droneStreaming = dgram.createSocket('udp4');
// droneStreaming.bind(PORTS.DRONE_STREAM_VIDEO_PORT);


// droneStreaming.on('message', (streaming) => console.log(`streaming from drone >>> `)); // ${streaming}



// drone commands
drone.on('message', (message) => console.log(`message from drone >>> ${message}`));
// drone status
/* droneStatus.on('message', (message) => console.log(`status >>> ${message}`)); */


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





//// SERVER



const cv = require('opencv4nodejs');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);




setTimeout(() => {


// config
const FPS = 30;

// get camera ID
// const wCap = new cv.VideoCapture(0)

// test to get drone cam
const attempts = [
	// 'rtps://192.168.10.1:11111',
	// 'rtps://0.0.0.0:11111',

	'udp://192.168.10.1:11111',
	// 'udp://0.0.0.0:11111',

	// 'udp://@192.168.10.1:11111',
	// 'udp://@0.0.0.0:11111',

	// '192.168.10.1:11111',
	// '0.0.0.0:11111',

	// 'udp://@:11111',

	// 'udp://192.168.10.1:11111/',
	// 'udp://192.168.10.1:11111/video.h264',

	// 'udp://@192.168.10.1'
	


];

// attempts.forEach((item) => {
// 	try{
// 		const wCap = new cv.VideoCapture(item, cv.CAP_FFMPEG)
// 		console.log('wCap', wCap)
// 	} catch(e) {
// 		console.log('e', e)
// 	}
// })

const wCap = new cv.VideoCapture('udp://192.168.10.1:11111', cv.CAP_FFMPEG)

// resize
// wCap.set(cv.CAP_PROP_FRAME_WIDTH, 300);
// wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 300);


server.listen(9700, () => console.log('Example app listening on port 9700!' ));

app.get('/', (req, res) => 
	res.sendFile(path.join(__dirname, './public/index.html'))
);

setInterval(() => {

	const frame = wCap.read();
	const image = cv.imencode('.jpg', frame).toString('base64');


  io.emit('image', image)
}, 100);

}, 7000)





// ffplay -probesize 32 -i udp://@192.168.10.1:11111 -framerate 30