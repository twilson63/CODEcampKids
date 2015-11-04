exports.verify = (args, cb) => cb(true)

exports.problem = `

Paragraph tag

There are a lot of tags or elements to review, we will cover some of the basic ones
here. HTML was designed to enable the sharing of documents, and we will be creating
a profile document for our avatar. A document paragraphs, and HTML has an instruction
for specifing paragraphs. The tag is 'p' or '<p></p>'

    <p>
      This is a paragraph of content, the way the browsers understand that this section,
      is a paragraph, is by the starting and stoping tags.
    </p>

The browser then understands that the content in between the <p></p> should be
presented as a paragraph.

You try now, create a new file 'lesson3.html' and open that file in your text
editor and create two paragraphs wrapped using the 'p' tags

then run:

    $ADVENTURE_COMMAND verify




`
