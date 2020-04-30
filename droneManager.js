const dgram = require('dgram');
const { DronePorts, HOST  } = require('./constants');
const { parseMessage } = require('./utils');
const { fromEvent } = require('rxjs');
const { map } = require('rxjs/operators');
// const cv = require('opencv4nodejs');

class DroneManager {
	constructor() {
		this.initCommandsConnection()
		this.initStatusConnection()
		// this.initStreamingConnection()
	}

  initCommandsConnection() {
		this.droneCommands = dgram.createSocket('udp4', (msg, info) => console.log('[UDP]', msg, info));
		this.droneCommands.bind(DronePorts.COMMANDS_PORT);

		// Debug udp readyness
		this.droneCommands.on('listening', () => {
			const address = this.droneCommands.address();
			console.log(`[UDP] listening on ${address.address}:${address.port}`);
		});

		// Debug feedback from drone
		this.droneCommands.on('message', (message) => console.log(`[DRONE] says: ${message}`));

		// Debug udp connection errors
		this.droneCommands.on('error', () => {
			console.log(`[UDP] error`);
		});
	}
	
	initStatusConnection() {
		this.droneStatus = dgram.createSocket('udp4', (msg, info) => console.log('[UDP]', msg, info));
		this.droneStatus.bind(DronePorts.STATUS_PORT);
	}

	initStreamingConnection() {
		this.droneStreaming = dgram.createSocket('udp4', (msg, info) => console.log('[UDP]', msg, info));
		this.droneStreaming.bind(DronePorts.STREAM_VIDEO_PORT);
	}

	// TODO: need throttle
	getStatusEvents() {
		// this.droneStatus.on('message', message => {
		// 	const parsedMessage = parseMessage(`${message}`);
		// 	console.log('[DRONE] stats:', parsedMessage);
		// 	socketInstance.emit('stats', parsedMessage);
		// })

		return (fromEvent(this.droneStatus, 'message')
						.pipe(
							map(message => parseMessage(`${message}`))
						))

	}

	getStreamingEvents() {
		// RETURn OBSERVABLE

		this.droneStreaming.on('message', (streaming) => console.log(`[DRONE] streaming >>> `)); // ${streaming}

		return fromEvent(this.droneStreaming, 'message')


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

	sendCommand(command, errorCallback) {
		console.log('RECEIVED AND READY TO BE SENT TO DRONE', command)
	// 	this.droneCommands.send(
	// 		'command',
	// 		0,
	// 		7,
	// 		DronePorts.COMMANDS_PORT,
	// 		HOST,
	// 		this.handleError.bind(this) // TODO handle emergency FE side
	// 	);

	// 	setTimeout(() => {
	// 		this.droneCommands.send(
	// 			'takeoff',
	// 			0,
	// 			7,
	// 			DronePorts.COMMANDS_PORT,
	// 			HOST,
	// 			this.handleError.bind(this) // TODO handle emergency FE side
	// 		);
			
	// 	}, 1000)

	// 	setTimeout(() => {
	// 		this.droneCommands.send(
	// 			'land',
	// 			0,
	// 			4,
	// 			DronePorts.COMMANDS_PORT,
	// 			HOST,
	// 			this.handleError.bind(this) // TODO handle emergency FE side
	// 		);
			
	// 	}, 5000)





		this.droneCommands.send(
			command,
			0,
			command.length,
			DronePorts.COMMANDS_PORT,
			HOST,
			this.handleError.bind(this) // TODO handle emergency FE side
		);
	}

	handleError(error){
		console.log('TEST', error);

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