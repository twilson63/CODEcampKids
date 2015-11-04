exports.verify = (args, cb) => cb(true)

exports.problem = `
Hello Cadets,

Are you ready to start your training?

In this lesson, we will learn the very basics of command line tools and text
editing.  These skills are core fundamental building blocks.

But before we get started on your training, you need to learn how to use your
training system.

The training system solution 2015 or short T15 has been designed to help guide
you through your intense and challenging process.

If you are reading this message, you have successfully installed T15 and should
be ready to learn how to use the training system.

When you are working through a challenge you will be asked to use the T15 to
verify your work. If successful, the T15 will respond with a success and mark
this part of your lesson as complete. If not successful, then the T15 will
respond with incorrect and try to display a helpful message of what may have
gone wrong.

Lets start, at the prompt give T15 your name:

Use the

    $ADVENTURE_COMMAND verify YOUR_NAME

`

exports.verify = (args, cb) => {
  console.log(`HELLO ${args}
    Welcome to the Cyber Academy Trainging Program
  `)
  cb(true)
}
