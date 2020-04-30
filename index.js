const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const droneSimulator = require('./droneSimulator');
const DroneManager = require('./droneManager');
const { PORT } = require('./constants')


const droneInstance = new DroneManager(); 
console.log('DroneManager', droneInstance);

io.on('connection', (socket) => {
    console.log('socket.id', socket.id)

     // INIT

    droneSimulator.runSimulator(io, 1000);
    
    socket.on(
      'command', 
      res => {
        console.log('COMMAND', res)

        droneInstance.sendCommand()
        
      }
    )
})

server.listen(PORT, () => console.log(`[SERVER] listening on port ${PORT}`));