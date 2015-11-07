var fs = require('fs')
exports.verify = (args, cb) => {
  if (!fs.existsSync('helloworld.html')) {
    return cb(false)
  }
  cb(true)
}

exports.problem = `

Create a new text file

When working with text you need a place to put the collection of text, you may
call a document or a program. This text is stored in files, and files are located
in directories.  In this exercise, we are going to open our editor, and create
a new file. In your editor look for a 'File' menu, and click on the 'File' menu
then select the 'New File' option.  Your editor may create a new file called
untitled or ask you to name it and then open it in the editing area.

Lets walk through creating a new file:

    create a new file and call it 'helloworld.html'

When we create files we use the 'dot' to separate the name from the extension.
The extension is how most computers and programs identify the contents or format
of a file. We are using the 'html' extension, which will make sense is a future
lesson.  Make sure you save the as 'index.html'.

When you finished saving your file call the verify command in the command-line.

    $ADVENTURE_COMMAND verify





`
