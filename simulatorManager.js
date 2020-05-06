// TODO develop this class to handle multiple simulators

// TODo would be nice to enable all drone features
// in simulator for testing in a easier way

class SimulatorManager {
  static runSimulator(socketInstance, interval) {

		let yaw = 0;
		let pitch = 0;
		let roll = 0;
    setInterval(() => {
			socketInstance.emit('stats', {
					bat: Math.random()* 100,
					h: Math.random()* 100,
					pitch: pitch /* ++ * 0.1 */ /* Math.random()* 100 */,
					roll: roll /* ++ * 0.1 */ /* Math.random()* 100 */,
					yaw: yaw /* ++ * 0.1 */ /* Math.random()* 100 */,
			})
    }, interval);
	}
}

module.exports = SimulatorManager;