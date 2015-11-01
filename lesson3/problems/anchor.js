exports.problem = `
anchor tag

An anchor tag allows you to define a bookmark tag and a link to that tag. Some might
say this is one of the most powerful features of HTML.

You can define an anchor bookmark by using a 'name' attribute:

<a name="location1"></a>

Then you can create an achor link by using the 'href' attribute:

<a href="#location1">Go to location1</a>

The link will create a clickable point when the user clicks on the click able text
they are navigated to the bookmarked location in the document. Anchor links have
many other features, like linking to other pages or web sites.

For this exercise, you will modify an html page and create some anchor-links in
the table of contents and add anchor bookmarks to each section.

run

    $ADVENTURE_COMMAND run

to generate the html document, open the document in your editor and add the bookmarks
and links, then run

    $ADVENTURE_COMMAND verify



`
