exports.verify = (args, cb) => cb(true)

exports.problem = `
Build a Web Page

In this exercise, we will take the html we just learned and start to put together
a web page.

* Create a new directory called '[Your Avatar name]'
* cd into that directory, and create a new file called 'about.html'

Use these questions to create an about profile page for your AVATAR.

* What is your avatar's name?  Add it as a 'h1' tag.

* Where is your avatar from, age, species? Add this in a a 'p' as a sentence:

    <p>Quark is a plunkit from the outer galaxy system of zendar, and he is 12
    years old.</p>

* create a list of your [AVATAR]'s favorite things

    <h2>Favorite Activities</h2>
    <ul>
      <li>Driving SpaceShips</li>
      <li>Exploring Different Planets</li>
      <li>Watching Moview</li>
      <li>Playing MineCraft</li>
    </ul>


When you have finished creating your [AVATAR]'s about.html, save the file, then
open the file in your web browser.

Open 'chrome' and click on the file menu and then click on the 'Open File' selection,
next navigate to your folder, if you are not sure, what folder your in, go to your
terminal and type 'pwd', this should give you the path to your folder.

Your about page should now open in the browser. To confirm you created a 'h1', 'p',
and 'ul' tags, run:

    $ADVENTURE_COMMAND verify


`
