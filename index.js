const dgram = require('dgram');
const wait = require('waait');
const commandDelays = require('./commandDelays.js');


const PORTS = {
    DRONE_COMMANDS_PORT: 8889,
    DRONE_STATUS_PORT: 8890,
}
const HOST = '192.168.10.1'; 

// Socket for drone controls
const drone = dgram.createSocket('udp4');
drone.bind(PORTS.DRONE_COMMANDS_PORT);

/* const droneStatus = dgram.createSocket('udp4');
droneStatus.bind(PORTS.DRONE_STATUS_PORT); */



// drone commands
drone.on('message', (message) => console.log(`message from drone >>> ${message}`));
// drone status
/* droneStatus.on('message', (message) => console.log(`status >>> ${message}`)); */



const commands = [ 
    'command', 
    'battery?',
    'takeoff',
    'flip l',
    'land'
]
let i = 0;



/**
 * loop to handle the commands sent to drone
 */
async function runDronePrograms() {
    
    const command = commands[i];
    const delay = commandDelays[command];
    console.log(`running drone program >>> ${command}`);
    
    drone.send(
        command,
        0,
        command.length,
        PORTS.DRONE_COMMANDS_PORT,
        HOST,
        handleError
    );
    
    await wait(delay);
    i++;
    if (i < commands.length){
        return runDronePrograms();
    }
    console.log(`all command's done, last executed command was >>> ${command}`)
}

runDronePrograms();



/**
 * Function to handle errors from drone response
 * @param {*} error 
 */
function handleError(error){
    if(error){
        console.log('>>error<<');
        console.log(error);
        console.log('>>>end<<<')
        drone.send(
            'emergency',
            0,
            9,
            PORTS.DRONE_COMMANDS_PORT,
            HOST,
            handleError
        )
    }
}


