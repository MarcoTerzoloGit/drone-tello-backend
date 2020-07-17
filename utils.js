const delay = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

const parseMessage = (message = '') => {
  return (message
    .split(';')
    .map(item => item.split(':'))
    .reduce((acc, cur) => {
      acc[cur[0]] = cur[1];
      return acc;
    }, {})
  )
}

const applyCalibration = (data) => {
  const droneData = {...data}

  droneData.pitch = droneData.pitch === 0 ? 0 : droneData.pitch * 0.5
  droneData.yaw = droneData.yaw === 0 ? 0 : droneData.yaw * 0.5
  droneData.roll = droneData.roll === 0 ? 0 : droneData.roll * 0.1

  return droneData;
}

module.exports = {
  delay,
  parseMessage,
  applyCalibration
}