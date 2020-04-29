const dgram = require('dgram');
const { DronePorts, HOST  } = require('./constants');
const { parseMessage } = require('./utils');
// const cv = require('opencv4nodejs');

class DroneManager {
	constructor() {
		this.initCommandsConnection()
		this.initStatusConnection()
		this.initStreamingConnection()
	}

  initCommandsConnection() {
		this.droneCommands = dgram.createSocket('udp4', (msg, info) => console.log('[UDP]', msg, info));
		this.droneCommands.bind(DronePorts.COMMANDS_PORT);
	}
	
	initStatusConnection() {
		this.droneStatus = dgram.createSocket('udp4', (msg, info) => console.log('[UDP]', msg, info));
		this.droneStatus.bind(DronePorts.STATUS_PORT);
	}

	initStreamingConnection() {
		this.droneStreaming = dgram.createSocket('udp4', (msg, info) => console.log('[UDP]', msg, info));
		this.droneStreaming.bind(DronePorts.STREAM_VIDEO_PORT);
	}

	getCommandEvents() {
		this.droneCommands.on('message', (message) => console.log(`[DRONE] >>> ${message}`));
	}

	// TODO: need throttle
	getStatusEvents(socketInstance) {
		this.droneStatus.on('message', message => {
			const parsedMessage = parseMessage(`${message}`);
			socketInstance.emit('stats', parsedMessage);
		})

	}

	getStreamingEvents() {
		// RETURn OBSERVABLE

		this.droneStreaming.on('message', (streaming) => console.log(`[DRONE] streaming >>> `)); // ${streaming}


		// setTimeout(() => {

		// 	// config
		// 	const FPS = 30;

		// 	const wCap = new cv.VideoCapture('udp://192.168.10.1:11111')

		// 	wCap.set(cv.CAP_PROP_BUFFERSIZE, 3);
		// 	wCap.set(cv.CAP_PROP_POS_FRAMES, 500);

		// 	// resize
		// 	wCap.set(cv.CAP_PROP_FRAME_WIDTH, 450);
		// 	wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 300);

		// 	setInterval(() => {
		// 		try {
		// 			const frame = wCap.read();
		// 			const image = cv.imencode('.jpg', frame).toString('base64');
		// 			io.emit('image', image)
		// 		} catch (error) {
		// 			console.log('error', error)
		// 		}
				
		// 	}, 100);

		// }, 7000)
	}

	sendCommand(commmand, errorCallback) {
		this.drone.send(
			commmand,
			0,
			commmand.length,
			DronePorts.COMMANDS_PORT,
			HOST,
			this.handleError.bind(this) // TODO handle emergency FE side
		);
	}

	handleError(error){
			if(error === 'error'){
					console.log('[DRONE] error', error);
					this.droneCommands.send(
							'emergency', // TODO put in constants
							0,
							9,
							DronePorts.COMMANDS_PORT,
							HOST,
							() => console.log('[DRONE][EMERGENCY] failed')
					)
			} else {
				console.log('[DRONE] error', error);
			}
	}
}

module.exports = DroneManager




// const returnCompositeCommand = (index, commandList) => {
//     const command = commandList[index][0];
//     const value = commandList[index][1] ? ` ${commandList[index][1]}`: '';
//     const delay = commandDelays[command];

//     return {
//         action: `${command}${value}`,
//         delay
//     };
// }

// const commands = [ 
//     ['command'], 
//     ['battery?'],
//     ['streamon'],
//     // ['takeoff'],
//     // ['forward', '50'],
//     // ['flip', 'l'],
//     // ['flip', 'r'],
//     // ['back', '50'],
//     // ['land']
// ]

// let i = 0;

// /**
//  * loop to handle the commands sent to drone
//  */
// async function runDronePrograms() {
    
//     const compositeCommand = returnCompositeCommand(i, commands)
    
    
//     console.log(`running drone program >>> ${compositeCommand.action}<`);
    
//     drone.send(
//         compositeCommand.action,
//         0,
//         compositeCommand.action.length,
//         PORTS.DRONE_COMMANDS_PORT,
//         HOST,
//         handleError
//     );
    
//     await wait(compositeCommand.delay);
//     i++;
//     if (i < commands.length){
//         return runDronePrograms();
//     }
//     console.log(`all command's done, last executed command was >>> ${compositeCommand.action}`)
// }

// runDronePrograms();