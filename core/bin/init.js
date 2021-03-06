#!/usr/bin/env node

const conductor = require('../commands/conductor')
const production = require('../commands/command.prod')
const development = require('../commands/command.dev')
const errors = require('../exceptions/handler.error')

const argvs = !process.argv[2] ? 'dev' : process.argv[2]
console.log('argvs', process.argv)

switch (argvs) {
  case 'prod':
    conductor.run(new production(argvs))
    break

  case 'dev':
    conductor.run(new development(argvs))
    break

  default:
    throw new errors(`${argvs} command not found!`)
}
