exports.problem = `

cp - copying files is also something that you can do via a command-line, using
cp command.

    cp source destination

Here we create 2 directories:

    mkdir stooges1
    mkdir stooges2

And create three files

    touch stooges1/moe
    touch stooges2/larry
    touch stooges3/curly

Finally copy the files from stooges1 to stooges2

    cp stooges1/moe stooges2/moe
    cp stooges1/larry stooges2/larry
    cp stooges1/curly stooges2/curly

In your exercise, create a directory called 'icecream', then create files in
that directory of your four flavors. Then create a new directory called
favorites and copy your two favorite flavors to the favorites directory.

    $ADVENTURE_COMMAND verify



`
