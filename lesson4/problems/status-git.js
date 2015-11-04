exports.problem = `
git status command

the git status command gives you insight into the current status of a git
local repository. What files you may have modified, what files are not being
tracked, etc.

Try it out:

    touch foo.html
    git status

You should see:

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	foo.html

nothing added to commit but untracked files present (use "git add" to track)

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	foo.html

nothing added to commit but untracked files present (use "git add" to track)

move to the next section

    $ADVENTURE_COMMAND verify

`
