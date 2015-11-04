exports.verify = (args, cb) => cb(true)

exports.problem = `

h1 tag

There are several tags that give you some granularity for headings, for example
in a document you may have 1 heading for the whole document, then you may have
a couple of sections in the document and you would like to provide headings for
those sections, which may have a different presentation than the heading for the
overall document.

    <h1>Document Title</h1>
    <h2>Group 1</h2>
    <p>Paragraph 1 of group 1</p>
    <p>Paragraph 2 of group 1</p>
    <h2>Group 2</h2>
    <p>Paragraph 1 of group 2</p>
    <p>Paragraph 2 of group 2</p>

There are a total of 6 different heading commands: h1, h2, h3, h4, h5, h6

In this exercise, create a html document which wraps the name of your ADVATAR
in a h1 tag then in a paragraph write a couple of sentences about the ADVATAR
bio.

What does your ADVATAR like to do for fun on a saturday?  What sports does your
avatar like? What movies does your avatar like.

When you have created a h1 tag and two p tags, then verify your document:

    $ADVENTURE_COMMAND verify [document.html]


`
