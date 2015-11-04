exports.verify = (args, cb) => cb(true)

exports.problem = `
git tag command

The git tag command allows you to associate a human reconizable text with a unique
commit identifier.

To tag your current commit, simply run the following:

    git tag [your text here]

To tag a specific identifier

    git tag -a [text] [identifier]

examples:

    git tag v1.0

or

    git tag -a v1.0 9fceb02


`
