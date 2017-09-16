'use strict'

const CONST = require('acho').constants

module.exports = {
  debug: {
    level: 4,
    color: ['#33ccff'],
    symbol: CONST.FIGURE.info
  },

  info: {
    level: 3,
    color: ['white'],
    symbol: CONST.FIGURE.info
  },

  success: {
    level: 2,
    color: ['#33ff66'],
    symbol: CONST.FIGURE.success
  },

  warn: {
    level: 1,
    color: ['#ffcc33'],
    symbol: CONST.FIGURE.warning
  },

  error: {
    level: 0,
    color: ['#FF3333'],
    symbol: CONST.FIGURE.error
  }
}
