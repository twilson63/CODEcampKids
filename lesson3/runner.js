#!/usr/bin/env node

var adventure = require('adventure')
var settings = require('./settings.json')

var shop = adventure({ name: settings.name, command: settings.command })

settings.list.forEach(function (p) {
  shop.add(p.join(' - '), () => require(__dirname + `/problems/${p[0]}`))
})

shop.execute(process.argv.slice(2))
