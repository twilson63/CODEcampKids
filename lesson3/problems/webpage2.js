exports.verify = (args, cb) => cb(true)

exports.problem = `
Explorers Schedule Table

In this exercise, we want to create a 'schedule.html' page for all of the destinations
our AVATAR will travel/explore.

* Go to your AVATAR's folder and create a new file called 'schedule.html'
* Open the file in your text editor
* create a 'h1' tag with the content 'SCHEDULE'
* create a 'table' tag with a 'tr' record and four 'th' table headers
  - Trip Number
  - Planet
  - Objective
  - More Info

Now create at least 3 'tr' records with the following data, or make up your own
data:

Trip Number  |  Planet       | Objective          | More Info
-------------|---------------|--------------------|-----------------------------
1            | Jupiter       | Explore Red Eye    | <a href="#jupiter">More</a>
2            | Mercury       | Take temperture    | <a href="#mercury">More</a>
3            | Saturn        | Measure Rings      | <a href="#saturn">More</a>

You are encouraged to make as many trips as you would like and you can make up
the planet names and objectives.

Once you have built your 'table', we need to add anchor tags named the same name
as the anchor link and a paragraph that provides a sentence or two about the trip.

For example:

<a name="jupiter">More Info about Jupiter Trip</a>
<p>
  [AVATAR] will approach Jupiter a orbit, slowly descending through the atmosphere
  targeting the red-eye surface area.  When [AVATAR] is in the eye, eject rover
  and explore the service.
</p>

* create a section for each trip in your list.

You can confirm your webpage works by opening the page in the 'chrome' web browser.

Once you have made all of your edits, you may run the verify step to continue.

    $ADVENTURE_COMMAND verify

`
