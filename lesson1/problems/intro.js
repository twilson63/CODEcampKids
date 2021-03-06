exports.verify = (args, cb) => cb(true)

exports.problem = `
Introduction to the Command line

The command-line is a text interface to your computer. It is a program that takes
commands and passes them to your computer to perform.

From the command-line can naviate through directories and files on the file
system.

The file system is a structure that allows you to store data in logical
directories or folders and files or documents. A file or document contains a
group of bytes that contains a reference or name. A folder is a logical group of
files.

Using commands you can create, modify, copy, move directories and files around.
Commands are composed of a set of instructions that do specific tasks.

You may have a command that tells you where you are in the file system, a
command that creates a new directory, and a command that removes a file.

There is no challenge in this section,

Use the

  $ADVENTURE_COMMAND verify

to move to the next section.

`

exports.verify = (args, cb) => {
  console.log(`run $ADVENTURE_COMMAND to get started`)
  cb(true)
}
