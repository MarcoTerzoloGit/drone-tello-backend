const DronePorts = {
  COMMANDS_PORT: 8889,
  STATUS_PORT: 8890,
  STREAM_VIDEO_PORT: 11111
}

const HOST = '192.168.10.1';

const PORT = 9700;

const commands = {
  FLIP_RIGHT: 'flip r',
  FLIP_LEFT: 'flip l',
  FORWARD: 'forward 50',
  BACKWARD: 'back 50',
  LEFT: 'left 50',
  RIGHT: 'right 50',
  LAND: 'land',
  TAKE_OFF: 'takeoff',
  STREAM: 'streamon',
  COMMAND: 'command'
};

module.exports = {
  DronePorts,
  commands,
  HOST,
  PORT
}