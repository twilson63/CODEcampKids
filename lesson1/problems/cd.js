exports.verify = (args, cb) => {
  if (args[0] !== 'dir2') return cb(false)
  cb(true)
}


exports.problem = `

cd - Change Directory

The change directory is one of the most common used commands on the command-line.
It gives you the power to navigate accross all of your directories.

by using cd and the name of the directory you can move from the current
working directory to the directory you just named.

For example, if I wanted to move to directory foo:

    cd foo

But you also need a way to go back up the directory tree.

    cd ..

Will return you back to the parent directory. if you continue
to enter the cd .. command you will continue up the directory tree
untils you reach the root of the directory.

You file system is structured like a trees root system:

                           [root]                                              |
                             |                                                 |
                            / \\                                                |
                      [dir1]   [dir2]                                          |
                        |         |                                            |
                       / \\         \\                                           |
                  [dir3] [dir4]    [dir5]                                      |
                    |                 |                                        |
                   / \\               / \\                                       |
             [dir6]  [dir7]     [dir8]  [dir9]                                 |



If I start in root and I run the following commands:

  cd dir2/dir5/dir9
  cd ..
  cd ..

What directory will be my new working directory?

    $$ADVENTURE_COMMAND verify ANSWER

`
