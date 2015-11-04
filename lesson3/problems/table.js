exports.verify = (args, cb) => cb(true)

exports.problem = `

Table Tags

Sometimes you want to present data in a column and row format, using the table
tags you can present tabular data.

    <h2>Movies</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Year</th>
      </tr>
      <tr>
        <td>Frozen</td>
        <td>2010</td>
      </tr>
      <tr>
        <td>Cars</td>
        <td>2005</td>
      </tr>
    </table>

The table tag defines the table structure and the 'tr' tag specifies a table row,
and 'th' tag is a table header and 'td' tag is a table detail.


`
