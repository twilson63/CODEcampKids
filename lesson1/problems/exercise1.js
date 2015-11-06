var mkdirp = require('mkdirp')
var _ = require('underscore')

exports.run = () => {
  var dirs = [
    'red-room',
    'blue-room',
    'red-room/yellow-room',
    'red-room/orange-room',
    'blue-room/green-room',
    'blue-room/green-room/pink-room',
    'blue-room/green-room/brown-room',
    'blue-room/black-room/white-room',
    'blue-room/black-room/purple-room',
    'blue-room/black-room/purple-room/waldo'
  ]
  _.each(dirs, (d) => mkdirp.sync(d, {mode: '0777'}))
}
exports.verify = (args, cb) => {
  if (args[0] !== 'purple-room') {
    return cb(false)
  }
  cb(true)
}

exports.problem = `

Where is waldo?

In this exercise we are going to use the

    $ADVENTURE_COMMAND run

To create a set of directories, and one directory will be called waldo

You will need to try to find the waldo directory by navigating through
the directory tree:

When you find waldo run verify with the name of the parent directory

    $ADVENTURE_COMMAND verify [parent directory]

`

exports.solution = `
    $ADVENTURE_COMMAND verify purple-room
`
