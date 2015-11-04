exports.verify = (args, cb) => cb(true)

exports.problem = `
git pull command

Now, the remote repository maybe modified after you have pulled it down, so
before you push your changes, you want to pull down the most recent commits into
your local respository.

    git pull origin master

the git pull command takes two arguments:

  origin - which is the remote name
  branch - which is the current branch you are working in

a git repository is a tree like structure:

local                           origin
  |                               |
master           <--            master
                                   |
                                  / \
                                 /   \
                            branch1  branch2
                              /  \         \
                        branch3  branch4   branch5

when you run

    git pull origin master

You are pulling the changes from the master branch into your current branch
which is the master branch.

to move to next section

    $ADVENTURE_COMMAND verify



`
