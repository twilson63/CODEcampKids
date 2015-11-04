exports.verify = (args, cb) => cb(true)

exports.problem = `

Basic File Commands

Using the file menu, you can open, save and close files as you work on them. When
you save a file, you are writing the changes you made to the file system.

Some editors auto-save for you, which means they write to the file system every
few seconds.

Create a new file called stuff.html, add some text like 'My Stuff' and then
save and close the file. Then open the file and you should see it appear in your
editor again.

Understanding the concept

Files are logical units of data with a name associated
for organization purposes. These files are grouped in directories in order to
catagorize them for human retrievability. Directories are organized in a tree
structure, so you can go from a central root or origin and work through the directory
tree to locate your file or files.

    $ADVENTURE_COMMAND verify
`
