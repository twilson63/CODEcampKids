var fs = require('fs')
exports.verify = (args, cb) => {
  try {
    fs.statSync('projects')
    cb(false)
  } catch (e) {
    cb(true)
  }
}

exports.problem = `
rmdir [directory]

This command removes the specified directory from the working directory.

example:

    rmdir projects

try to remove the directory you just created called projects then run

    $ADVENTURE_COMMAND verify

`

exports.solution = `
rmdir projects
`
