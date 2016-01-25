# Ember Curry Helpers

HTMLBars template helpers for action currying. This is a fork of `ember-truth-helpers`, because they nailed backwards compatability with previous Ember versions 1.12 and below.

## Currying Usage
Ember Closure Actions do not curry values from one function to the next. Sometimes we want to express actions explicitly in our handlebars template. The main helper for currying values to actions is the `pipe` helper. It curries the return value from one function, the the next function in the action-pipe.

### Example usage with TODO MVC

Helper   | HTMLBars Example                            
---------|--------------------------------------
pipe     | `{{some-component action=(pipe (format-todo) (action (mut todo))}}`
push     | `{{some-component action=(pipe (format-todo) (push todos) (action (mut todos))}}`

## Install
Currently, you have to point your package.json at our branch:
* `"ember-curry-helpers": "git+https://github.com/flexyford/ember-curry-helpers.git"`

Plan to use `ember install` when API is further cemented.
* `ember install ember-curry-helpers`

## Other Helpers

* [ember-get-helper](https://github.com/jmurphyau/ember-get-helper)
* [ember-truth-helper](https://github.com/jmurphyau/ember-truth-helpers)

## Ember versions 1.12 and below
If you want the power of the `pipe` helper and currying actions, but are on an older versions of Ember, we present the `closure-actions` helper. This is **NOT A POLYFILL** for Ember Improved Actions! Instead the `closure-action` helper providesbut a simple and naiive way to bring the `pipe` helper into older Ember applications.



## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
