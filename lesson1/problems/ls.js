exports.verify = (args, cb) => cb(true)
exports.problem = `
ls

'ls' is a command that shows you the contents of your directory or a directory
you may specify as an argument.

For example:

If I just type:

ls

I may get:

directory1 file1 file2

If I type:

ls directory1

Then I will get the contents of directory1

a1 a2

exercise:

in the current directory run the

    $ADVENTURE_COMMAND run

command and then run the

    ls

command - you should see two files with a prefix of foo

to verify you performed things correctly run the verify command
with the two file as arguments

    $ADVENTURE_COMMAND verify FILE1 FILE2


`

exports.verify = (args, cb) => {
  if (~['meteor.html', 'comet.html'].indexOf(args[0]) && ~['meteor.html', 'comet.html'].indexOf(args[1])) {
    return cb(true)
  }
  return cb(false)
}

var fs = require('fs')

exports.run = (args, cb) => {
  fs.writeFileSync('meteor.html', '<h1>Meteor</h1>')
  fs.writeFileSync('comet.html', '<h1>Flying Comet</h1>')
  console.log('run ls')
}

exports.solution = `
$ADVENTURE_COMMAND verify meteor.html comet.html 
`
