var fs = require('fs')
exports.run = (args) => fs.writeFileSync('cutcopypaste.html', `
Lorem ipsum dolor sit amet, nobis evertitur id duo, et facete detraxit ius. In sea homero mediocrem, aeque zril consul ea pro. Mea altera noster persius eu. No per amet cetero imperdiet, ne vel nihil regione impedit.

Prima percipit conclusionemque nec id, ut alia modus aliquando mel. Ea per graece malorum. Facer consulatu pri in. Eu zril altera possit his, prima consul necessitatibus no duo. Nonumy mediocrem eos ut.

Quo omittantur philosophia theophrastus eu. Semper impetus ut nam, exerci mollis at nec. Cibo inani deterruisset eu mea. Pro cu alii eleifend philosophia, quo cu malis integre.

At ancillae volutpat sea. Docendi denique constituto at nam, mei scripta argumentum te, et pro quot fabellas. Mollis adipiscing scriptorem cu mei. Eos sonet dolores honestatis ex, meis erant facete qui ex.

Iuvaret convenire sit ea. Probo audire nominati et vel, sed in everti tamquam laboramus, ius solum perpetua scripserit et. In vim meliore gloriatur mediocritatem. Ut cum prima tantas appareat, liber aperiam eu eam. Et rebum mediocritatem has, mea id omittam platonem constituam. Fugit erant oratio cu vel. Usu laboramus interpretaris ne, cum habemus expetenda mediocritatem in, offendit epicurei contentiones at eum.
`)

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

  use the 'arrow' keys to highlight the first paragraph and we will walk through

  cut and paste

  run the verify command

    $ADVENTURE_COMMAND verify


`
