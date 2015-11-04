exports.verify = (args, cb) => cb(true)

exports.problem = `
git remote add origin [url]

When you create a git repository, you will want to distribute it to other locations.

To do this you need to specify a remote location in your repository. Simply by
running

    git remote add origin [target]

Where the target is your remote location.

For example, if your target was 'https://gitlab.chscoderdojo.com/twilson/myproject.git'

then you would create a pointer to that remote location by doing the following:

    git remote add origin https://gitlab.chscoderdojo.com/twilson/myproject.git

move to the next section

    $ADVENTURE_COMMAND verify


`
