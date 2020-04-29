// TODo would be nice to enable all drone features
// in simulator for testing in a easier way

const droneSimulator = {
  runSimulator(socketInstance, interval) {
    setInterval(() => {
        socketInstance.emit('stats', {
            bat: Math.random()* 100,
            h: Math.random()* 100,
            pitch: Math.random()* 100,
            roll: Math.random()* 100,
            yaw: Math.random()* 100,
        })
    }, interval);
}
}

module.exports = droneSimulator