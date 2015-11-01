exports.problem = `
pwd

is a command that returns the current directory or working directory.
pwd actually stands for 'print working directory'. Similar to the 'you are here'
notifications that you may see at a mall. The 'pwd' command will let you know
your current location.

In this exercise, we want to practice using the pwd command.

In the command-line, type 'pwd' to determine the logical directory.

It should print it on the screen. Simply retype the current directory in the
verify command.

    $ADVENTURE_COMMAND verify DIRECTORY

If it matches what the T15 sees as the current directory, you will have passed
this exercise and may continue through your training.

`

exports.verify = (args, cb) => {
  console.log(process.cwd())
  if (process.cwd() === args.join(' ')) {
    console.log('You passed!')
    return cb(true)
  }
}

exports.run = (args, cb) => {
  console.log(process.cwd())
  console.log(args)
  console.log(process.cwd() === args.join(' '))
}
