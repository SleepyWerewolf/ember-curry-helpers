# Ember Truth Helpers

HTMLBars template helpers for additional action currying capabilities

## Usage

Helper   | JavaScript                           | HTMLBars
---------|--------------------------------------|-------------------
pipe     | `if (a === b)`                       | `{{if (eq a b)}}`
append   | `if (a !== b)`                       | `{{if (not-eq a b)}}`

## Install

* `ember install ember-curry-helpers`

## Other Helpers

* [ember-get-helper](https://github.com/jmurphyau/ember-get-helper)
* [ember-truth-helper](https://github.com/jmurphyau/ember-truth-helpers)

## Development

* `git clone https://github.com/flexyford/ember-curry-helpers.git`
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
