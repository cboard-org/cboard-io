[![Netlify Status](https://api.netlify.com/api/v1/badges/74ef9bcc-2651-4243-b7bd-e00e118646c9/deploy-status)](https://app.netlify.com/sites/cboard-io/deploys)

# Cboard.io

An informational website for [Cboard](https://github.com/cboard-org/cboard), an augmentative and alternative communication (AAC) web application, allowing users with speech and language impairments (autism, cerebral palsy) to communicate by symbols and text-to-speech.

## Develop

Cboard.io was built with [Jekyll](http://jekyllrb.com/) version 3.3.1, but should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

### Posts

* Add, update or remove a post in the *Posts* collection.
* The **Staff Author** field links to members in the **Staff Members** collection.
* Documentation pages are organised in the navigation by category, with URLs based on the path inside the `_docs` folder.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Staff

* Reused around the site to save multiple editing locations.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.
