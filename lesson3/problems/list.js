exports.problem = `
List tags

In HTML, there are two tags to present lists: 'ol' (ordered list) and 'ul'
(unordered list), these tags require nested or child tags inside their block,
to know what items to list.  The tag name for these child tags is 'li' (List Item).

Here is an example:

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

The 'ul' tag lets the browser know about the list, and the child 'li' tags, lets
the browser know about the item in the list.

The difference between a order list and an unordered list is that the ordered list
default behavior will provide a numbering in front of the item and the unordered list
will provide a bullet in front of the item.

Create a html document that lists out your ADVATAR's top 4 favorite books or movies.

Save your file when your finished and run:

    $ADVENTURE_COMMAND verify [your_file.html]

`
