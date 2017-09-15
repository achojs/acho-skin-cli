'use strict'

const should = require('should')

const acho = require('acho')
const skinCli = require('..')

describe('acho-skin-cli', () => {
  it('load the skin', () => {
    const log = acho({types: skinCli})
    should(Object.keys(log.types)).be.eql([
      'debug',
      'info',
      'success',
      'warn',
      'error'
    ])
  })
})
