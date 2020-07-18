const dgram = require('dgram');
const { DronePorts, HOST  } = require('./constants');
const { parseMessage, applyCalibration } = require('./utils');
const { fromEvent, BehaviorSubject } = require('rxjs');
const { map, debounceTime } = require('rxjs/operators');
// const cv = require('opencv4nodejs');

class DroneManager {
	constructor() {
		this.initCommandsConnection()
		this.initStatusConnection()
		// this.initStreamingConnection()
		this.droneConnected$ = new BehaviorSubject(false);
	}

  initCommandsConnection() {
		this.droneCommands = dgram.createSocket('udp4', (msg, info) => console.log('[UDP]', msg, info));
		this.droneCommands.bind(DronePorts.COMMANDS_PORT);

		// Debug udp readyness
		this.droneCommands.on('listening', () => {
			const address = this.droneCommands.address();
			console.log(`[UDP] listening on ${address.address}:${address.port}`);

			// Notify drone is connected so we can start listen tostats
			this.droneConnected$.next(true);
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
		return (fromEvent(this.droneStatus, 'message')
						.pipe(
							map(message => parseMessage(`${message}`)),
							map(parsedMessage => applyCalibration(parsedMessage))
						))

	}

	getStreamingEvents() {
		// this.droneStreaming.on('message', (streaming) => console.log(`[DRONE] streaming >>> `)); // ${streaming}

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
		console.log('[COMMANDS] sending eligible:', command)

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
