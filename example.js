const acho = require('acho')
const types = require('.')

const log = acho({types})
const withSymbols = acho({types, keyword: 'symbol'})

const msg = 'hello world'
const t = Object.keys(log.types)

console.log('\nwithout symbols\n')
t.forEach(type => log[type](msg))

console.log('\nwith symbols\n')
t.forEach(type => withSymbols[type](msg))
