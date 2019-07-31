const dgram = require('dgram');
const wait = require('waait');
const commandDelays = require('./commandDelays.js');


const PORTS = {
    DRONE_COMMANDS_PORT: 8889,
    DRONE_STATUS_PORT: 8890,
    DRONE_STREAM_VIDEO_PORT: 11111
}

const HOST = '192.168.10.1'; 

// Socket for drone controls
const drone = dgram.createSocket('udp4');
drone.bind(PORTS.DRONE_COMMANDS_PORT);

/* const droneStatus = dgram.createSocket('udp4');
droneStatus.bind(PORTS.DRONE_STATUS_PORT); */


const droneStreaming = dgram.createSocket('udp4');
droneStreaming.bind(PORTS.DRONE_STREAM_VIDEO_PORT);

droneStreaming.on('message', (streaming) => console.log(`streaming from drone >>> ${streaming}`));




// drone commands
drone.on('message', (message) => console.log(`message from drone >>> ${message}`));
// drone status
/* droneStatus.on('message', (message) => console.log(`status >>> ${message}`)); */


const returnCompositeCommand = (index, commandList) => {
    const command = commandList[index][0];
    const value = commandList[index][1] ? ` ${commandList[index][1]}`: '';
    const delay = commandDelays[command];

    return {
        action: `${command}${value}`,
        delay
    };
}

const commands = [ 
    ['command'], 
    ['battery?'],
    ['streamon'],
    // ['takeoff'],
    // ['forward', '50'],
    // ['flip', 'l'],
    // ['flip', 'r'],
    // ['back', '50'],
    // ['land']
]

let i = 0;

/**
 * loop to handle the commands sent to drone
 */
async function runDronePrograms() {
    
    const compositeCommand = returnCompositeCommand(i, commands)
    
    
    console.log(`running drone program >>> ${compositeCommand.action}<`);
    
    drone.send(
        compositeCommand.action,
        0,
        compositeCommand.action.length,
        PORTS.DRONE_COMMANDS_PORT,
        HOST,
        handleError
    );
    
    await wait(compositeCommand.delay);
    i++;
    if (i < commands.length){
        return runDronePrograms();
    }
    console.log(`all command's done, last executed command was >>> ${compositeCommand.action}`)
}

runDronePrograms();



/**
 * Function to handle errors from drone response
 * @param {*} error 
 */
function handleError(error){
    if(error === 'error'){
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


