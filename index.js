// Server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Utils
const { PORT } = require('./constants');
const { fromEvent } = require('rxjs');
const { first, concatMap } = require('rxjs/operators')

// Managers
const SimulatorManager = require('./simulatorManager');
const DroneManager = require('./droneManager');
const CommandsManager = require('./commandsManager');

const droneServiceApp = () => {
  const droneInstance = new DroneManager();
  const commandsInstance = new CommandsManager()

  // handle client connection and drone managment
  fromEvent(io, 'connection')
    .pipe(
      first(), // just to have one client
      concatMap((socket) => {
        console.log('[SOCKET] id:', socket.id)
        SimulatorManager.runSimulator(io, 100);

        return fromEvent(socket, 'command');
      })
    )
    .subscribe(command => {
      console.log('[SOCKET] command received:', command);
      commandsInstance.pushToQueue(command);
    })

    setTimeout(() => {
      droneInstance.getStatusEvents()
      .subscribe(stats => {
        console.log('[SOCKET] emitting...')
        io.emit('stats', stats)
      })

      // droneInstance.getStreamingEvents()
      //   .subscribe(stream => console.log('[DRONE] stream:', stream))
    
      // react to prepared commands and send
      commandsInstance.commandsQueue$
        .subscribe(
          currentCommand => droneInstance.sendCommand(currentCommand)
        )
    }, 10000)

    

  server.listen(PORT, () => console.log(`[SERVER] listening on port ${PORT}`));
}

droneServiceApp();