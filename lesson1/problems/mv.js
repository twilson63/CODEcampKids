exports.verify = (args, cb) => cb(true)

exports.problem = `

mv - the command that moves a file from one directory to another, or renames the
file from one name to another.

    mv curly moe

or

    mkdir stooges
    mv moe stooges/moe
    touch stooges/larry
    touch stooges/curly

in this exercise, create a directory called stooges, then create three files
using touch command: larry, curly and moe - then move the files into the
stooges directory.  Make sure your working directory is set to the parent of the
stooges directory and run

    $ADVENTURE_COMMAND verify

`
