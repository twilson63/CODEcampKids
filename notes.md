gitlab to static web project

using gitlab trigger a webhook to a service that does the following:

* git clones the files from gitlab
* builds a couchapp json file
* pushes them to a couchdb server to serve

