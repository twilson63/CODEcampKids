exports.run = (args) => {
  fs.writeFileSync('spongebob.html', `
  Captain: Ohhhhh... who lives in a [1] under the [2]?

  Kids: [3] Squarepants!

  Captain: [4] and [5] and [6] is he!

  Kids: Squarepants!

  Captain: If [7] [8] be somthing you [9]...

  Kids: Squarepants!

  Captain: Then [10] on the [11] and [12] like a [13].

  Kids: Squarepants!

  Captain: Ready?

  Everyone: Squarepants! Squarepants! Squarepants!

  Captain: ... Squarepants! ahhhahhhahahhaha!
`)
}

exports.problem = `
Create another madlib for fun:

1. FRUIT
2. NOUN
3. NAME
4. ADJECTIVE
5. COLOR
6. ADJECTIVE
7. ADJECTIVE
8. NOUN
9. VERB
10. VERB
11. NOUN
12. VERB
13. ANIMAL

run

    $ADVENTURE_COMMAND run

to create the madlib story as spongebob.html



`
