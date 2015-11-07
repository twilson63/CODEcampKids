var fs = require('fs')

exports.run = (args) => {
  fs.writeFileSync('madlibs.html', `
Flint[1], meet the Flint,
They're a modern [2] family.
From the town of [3],
They're a [4] right out of history.

Let's [5], with the family down the [6],
Through the courtesy of [7]'s [8] feet.
When you're with the Flint,
Have a [9] [10] doo [11] -- A doo ,
You'll have a [12] old !
  `)
}

exports.verify = (args, cb) => {
  var data = fs.readFileSync('madlibs.html')
  if (data.indexOf('[') > -1) { return cb(false) }
  cb(true)
}

exports.problem = `
Mad Libs Challenge

Mad Libs are a phrasal template word game where one player prompts others for a
list of words to substitute for blanks in a story, before reading the -- often
comical or nonsensical -- story aloud.

We are going to do the first Mad Lib:

Write out a word for each of the following expressions

1. NOUN (PLURAL)
2. ADJECTIVE
3. CITY
4. NOUN
5. VERB
6. NOUN
7. PERSON IN ROOM
8. NUMBER
9. SILLY WORD
10. SILLY WORD
11. NOUN
12. ADJECTIVE

Exchange paper with your team mate. And run

    $ADVENTURE_COMMAND run

Open the file that was created called 'madlibs.html' and replace the blanks with
the answers.

    $ADVENTURE_COMMAND verify


`
