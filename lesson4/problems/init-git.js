exports.verify = (args, cb) => cb(true)

exports.problem = `
git init command

The git init command creates a new local repository for you to start tracking
changes.

Lets create a new git repo.

First, Lets make sure your are in your start folder.

    pwd

if this is your start folder, then great, if not, lets move to it using 'cd'

    cd ~/[your avatar name]

now lets create a new folder called: 'gitgame'

    mkdir gitgame
    cd gitgame

Now lets turn this folder into a git repository:

    git init

to confirm you successfully created the git repository:

    $ADVENTURE_COMMAND verify



`
