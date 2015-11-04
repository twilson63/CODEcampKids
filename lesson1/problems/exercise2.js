exports.verify = (args, cb) => cb(true)

exports.problem = `
  Where is waldo part 2

  This time waldo is a file and he is hidden under a maze of directories.  your
  challenge is to find waldo and then find the waldo-home directory. Then
  move waldo to the waldo-home directory. To setup the challenge run:

      $ADVENTURE_COMMAND run

Once you have completed the challenge run:

      $ADVENTURE_COMMAND verify

`
