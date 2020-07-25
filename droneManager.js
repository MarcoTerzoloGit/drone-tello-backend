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





		//////////////////////////////

		// THANKS: https://github.com/dbaldwin/tello-video-nodejs-websockets



		// // Import necessary modules for the project
		// // A basic http server that we'll access to view the stream
		// const http = require('http');

		// // To keep things simple we read the index.html page and send it to the client
		// const fs = require('fs');

		// // WebSocket for broadcasting stream to connected clients
		// const WebSocket = require('ws');

		// // We'll spawn ffmpeg as a separate process
		// const spawn = require('child_process').spawn;

		// // For sending SDK commands to Tello
		// const dgram = require('dgram');

		// // HTTP and streaming ports
		// const HTTP_PORT = 3000;
		// const STREAM_PORT = 3001

		// // Tello's ID and Port
		// const TELLO_IP = '192.168.10.1'
		// const TELLO_PORT = 8889

		// /*
		//   1. Create the web server that the user can access at
		//   http://localhost:3000/index.html
		// */
		// server = http.createServer(function(request, response) {

		//   // Log that an http connection has come through
		//   console.log(
		// 		'HTTP Connection on ' + HTTP_PORT + ' from: ' + 
		// 		request.socket.remoteAddress + ':' +
		// 		request.socket.remotePort
		// 	);

		//   // Read file from the local directory and serve to user
		//   // in this case it will be index.html
		//   fs.readFile(__dirname + '/www/' + request.url, function (err,data) {
		//     if (err) {
		//       response.writeHead(404);
		//       response.end(JSON.stringify(err));
		//       return;
		//     }
		//     response.writeHead(200);
		//     response.end(data);
		//   });

		// }).listen(HTTP_PORT); // Listen on port 3000

		// /*
		//   2. Create the stream server where the video stream will be sent
		// */
		// const streamServer = http.createServer(function(request, response) {

		//   // Log that a stream connection has come through
		//   console.log(
		// 		'Stream Connection on ' + STREAM_PORT + ' from: ' + 
		// 		request.socket.remoteAddress + ':' +
		// 		request.socket.remotePort
		// 	);

		//   // When data comes from the stream (FFmpeg) we'll pass this to the web socket
		//   request.on('data', function(data) {
		//     // Now that we have data let's pass it to the web socket server
		//     webSocketServer.broadcast(data);
		//   });

		// }).listen(STREAM_PORT); // Listen for streams on port 3001

		// /*
		//   3. Begin web socket server
		// */
		// const webSocketServer = new WebSocket.Server({
		//   server: streamServer
		// });

		// // Broadcast the stream via websocket to connected clients
		// webSocketServer.broadcast = function(data) {
		//   webSocketServer.clients.forEach(function each(client) {
		//     if (client.readyState === WebSocket.OPEN) {
		//       client.send(data);
		//     }
		//   });
		// };

		// /* 
		//   4. Send the command and streamon SDK commands to begin the Tello video stream.
		//   YOU MUST POWER UP AND CONNECT TO TELL BEFORE RUNNING THIS SCRIPT
		// */
		// const udpClient = dgram.createSocket('udp4');

		// // These send commands could be smarter by waiting for the SDK to respond with 'ok' and handling errors
		// // Send command
		// udpClient.send("command", TELLO_PORT, TELLO_IP, null);

		// // Send streamon
		// udpClient.send("streamon", TELLO_PORT, TELLO_IP, null);

		// /*
		//   5. Begin the ffmpeg stream. You must have Tello connected first
		// */

		// // Delay for 3 seconds before we start ffmpeg
		// setTimeout(function() {
		//   var args = [
		//     "-i", "udp://0.0.0.0:11111",
		//     "-r", "30",
		//     "-s", "960x720",
		//     "-codec:v", "mpeg1video",
		//     "-b", "800k",
		//     "-f", "mpegts",
		//     "http://127.0.0.1:3001/stream"
		//   ];

		//   // Spawn an ffmpeg instance
		//   var streamer = spawn('ffmpeg', args);
		//   // Uncomment if you want to see ffmpeg stream info
		//   //streamer.stderr.pipe(process.stderr);
		//   streamer.on("exit", function(code){
		//       console.log("Failure", code);
		//   });
		// }, 3000);



		//////////////////
		//////////////////
		//////////////////


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