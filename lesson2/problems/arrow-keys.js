exports.verify = (args, cb) => cb(true)

exports.problem = `

Arrow Keys

When working with files, you need a way to navigate the file itself as you perform
edits and modifications. Most common editors use the arrow keys on the keyboard
to navigate through the file without performing any modification.

Exercise:

Run the $ADVENTURE_COMMAND run command to generate a file called 'beepboop.html'

    $ADVENTURE_COMMAND run

In your text editor, use the open command to open the file and use the arrow keys
to move to every word that says ADVATAR in all caps and remove the ADVATAR word
and add your advatar name, then save the file and run the verify command.

    $ADVENTURE_COMMAND verify


`
