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
