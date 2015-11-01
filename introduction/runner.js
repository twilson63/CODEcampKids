#!/usr/bin/env node --harmony_destructuring

var adventure = require('adventure')
var { name, command, list } = require('./settings.json')

var shop = adventure({ name, command })

list.forEach(function (p) {
  shop.add(p.join(' - '), () => require(__dirname + `/problems/${p[0]}`))
})

shop.execute(process.argv.slice(2))
