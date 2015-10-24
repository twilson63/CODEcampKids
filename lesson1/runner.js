#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure({
  name: 'Cadet Lesson 1',
  command: 'cl1a'
})

var problems = [
  ['welcome', 'Welcome to T15 (Directories and Files)'],
  ['intro', 'Introduction to the File System'],
  ['pwd', 'Get Current Working Directory'],
  ['ls', 'List Directory Contents'],
  ['mkdir', 'Make Directory'],
  ['cd', 'Change Directory'],
  ['touch', 'Create a File'],
  ['mv', 'Move File or Directory'],
  ['cp', 'Copy File or Directory'],
  ['rm', 'Remove File or Directory'],
  ['exam', 'Exam to pass level1a']
]

problems.forEach(function (p) {
  shop.add(p.join(' - '), () => require(__dirname + `/problems/${p[0]}`))
})

shop.execute(process.argv.slice(2))
