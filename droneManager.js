const dgram = require('dgram');
const { DronePorts, HOST  } = require('./constants');

class droneManager {

	dronecommands;
	droneStatus;
	droneStreaming;

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
			const parsedMessage = this.parseMessage(`${message}`);
			socketInstance.emit('stats', parsedMessage);
		})

	}

	getStreamingEvents() {
		// RETURn OBSERVABLE

		this.droneStreaming.on('message', (streaming) => console.log(`[DRONE] streaming >>> `)); // ${streaming}
	}

	sendCommand(commmand, errorCallback) {
		this.drone.send(
			commmand,
			0,
			commmand.length,
			DronePorts.COMMANDS_PORT,
			HOST,
			errorCallback
		);
	}

	parseMessage(message) {
		return message.split(';')
			.map(item => item.split(':'))
			.reduce((acc, cur) => {
				acc[cur[0]] = cur[1];
				return acc;
			}, {})
			// console.log(`parsed message from drone >>> `, parsedMessage);
	}

}

module.exports = droneManager