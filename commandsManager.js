const { BehaviorSubject } = require('rxjs')
const { commands } = require('./constants.js');

class CommandsManager {
  constructor() {
    this.commandsQueue$ = new BehaviorSubject(null);
    this.commandsQueue$.next('command')
    // this.commandsQueue$.next('streamon')
  }

  pushToQueue(command) {
    this.filterInvalidCommands(command)
  }

  filterInvalidCommands(command) {

    console.log('----commands', commands)
    console.log('++++command', command)

    // check if valid
    if(!command) {
      return console.log('[COMMAND] invalid')
    }

    // check if enabled
    if(commands && !Object.values(commands).find(value => value === command)) {
      return console.log('[COMMAND] not enabled')
    }

    // check if allowed
    if(command === commands.STREAM || command === commands.COMMAND) {
      return console.log('[COMMAND] already initialized')
    }

    console.log('[COMMAND] sending...', command)
    return this.commandsQueue$.next(command);
  }
}

module.exports = CommandsManager