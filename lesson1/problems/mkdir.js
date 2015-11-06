var fs = require('fs')
exports.verify = (args, cb) => {
  try {
    fs.statSync('projects')
    cb(true)
  } catch (e) {
    cb(false)
  }
}

exports.problem = `

mkdir - the command that creates a directory.

The computer uses a logical system to organize its data, in the terms of files
and directories. As a user you get to decide how you want to organize your file
system. On feature that enables you to do this is called 'mkdir'; this command
creates a directory in your system. The directory is a virtual folder in the
computer that enables you to organize your files.

To create a directory, you call the command and provide a name as the first
argument in the command.

For example, if I wanted to create a directory for my photos.

    mkdir photos

Or if I wanted to create a directory to store files of my projects:

    mkdir projects

Try to create a directory for your projects - Use the mkdir command

Then run

    $ADVENTURE_COMMAND verify

`

exports.solution = `
mkdir projects
`
