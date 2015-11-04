exports.verify = (args, cb) => cb(true)

exports.problem = `

cut copy paste

These terms are from the old days where you may print a document and take some
scissors and cut out a word or words of the document and get glue and paste
another word or words in place. In text editing when we cut a word or words, it
basically removes them from the document, but stores them in a hidden bin.

Then you can navigate to another section of the document and perform a 'paste'
command that takes the cut words out of the bin and places them at the current
location.

The 'copy' command works just like the 'cut' command, but it does not remove the
text from the origin location, it just copies it into the bin.

Selecting text

In order to use the cut and copy commands, you need to be able to highlight or
select the text you want to apply the commands to. You can highlight these commands
by holding the 'shift' key and using the arrow keys to select the text you want
to 'cut' or 'copy'.

Lets practice:

Create a file called cutcopypaste.html by running the $ADVENTURE_COMMAND run command

    $ADVENTURE_COMMAND run

Now open the cutcopypaste.html in your editor

  use the 'arrow' keys to highlight the first paragraph and use

  'cmd' (mac) or 'ctrl' (chromebook) + the 'x' key to cut the paragraph

  then use the 'cmd' (mac) or 'ctrl' (chromebook) + the 'down' arrow to move to the
  end of the file. Create a new line by pressing the 'enter' key.

  and the 'cmd' (mac) or 'ctrl' (chromebook) + the 'v' key to paste the contents
  into the bottom of the text file.

  run the verify command

    $ADVENTURE_COMMAND verify


`
