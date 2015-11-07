exports.problem = `
Lets deploy our first web site:

First we are going to create a project

    npm init

next we will install a web server to serve our site

    npm install w3 -S

edit the package.json

    json -I -f package.json -e 'this.scripts.start = "w3 ${PORT}"'

lastly we will deploy to the cloud (pivotal.io)

    cf push [avatar] -m 64M
`

exports.verify = (args, cb) => cb(true)
