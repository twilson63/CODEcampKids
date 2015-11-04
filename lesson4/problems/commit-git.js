exports.verify = (args, cb) => cb(true)

exports.problem = `
git commit command

The git commit command publishes you changes to your local git repository.  When
you clone a repository from a remote location, you are basically copying it to your
local computer.  When you do a 'git add' to your local git repository, you are adding
the file to a list of files to be tracked. When you do a 'git commit', you are applying
the newly added files and the modified files that are being tracked to your local
repository with a unique identifier.

With the git commit, you need to provide a message to help you remember what you
did for tracking purposes. So a git commit message looks something like this:

    git commit -m "Added my website folder and pages"

Now run the git commit command, and once successful, then run the verify command
to move to next section.

    $ADVENTURE_COMMAND verify
`
