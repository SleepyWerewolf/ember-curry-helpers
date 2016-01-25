# Ember Curry Helpers

HTMLBars template helpers for action currying. This is a fork of `ember-truth-helpers`, because they nailed backwards compatability with previous Ember versions 1.12 and below.

## Currying Usage
Ember style closure actions do not curry values from one function to the next. However, we sometimes want to express actions explicitly in our handlebars template. This is why we built `ember-curry-helpers`.

The main helper for currying values to actions is the `pipe` helper. It curries the return value from one function to input value of the next function in the action-pipe.

### Example usage with TODO MVC

Helper   | HTMLBars Example                            
---------|--------------------------------------
pipe     | `{{some-todo-component on-save=(pipe (format-todo) (action (mut todo))}}`
push     | `{{some-todo-component on-save=(pipe (format-todo) (push todos) (action (mut todos))}}`

## Install
Currently, you have to point your package.json at our branch:
* `"ember-curry-helpers": "git+https://github.com/flexyford/ember-curry-helpers.git"`

Plan to use `ember install` when our API is further cemented.
* `ember install ember-curry-helpers`

### Ember versions 1.12 and below
If you want the power of the `pipe` helper and currying actions but are on an older versions of Ember, we have a `closure-action` helper. This is **NOT A POLYFILL** for Ember Improved Actions! Instead the `closure-action` helper provides a simple and naiive way to bring the `pipe` helper into your older Ember applications.

### Closure Actions Usage (Ember 1.12 and below)
You can use the `closure action` helper as you would the `action` helper in 1.13 and above.

```hbs
{{!-- app/templates/some-component.js --}}
{{some-pikaday-component on-select=(closure-action 'pick-date')}}
```

And combine it with the `pipe` helper.
```hbs
{{!-- app/templates/some-component.js --}}
{{some-pikaday-component on-select=(pipe (format-pikaday-date) (closure-action 'pick-date')}}
```

> Note: `format-pikaday-date` is a custom helper. That's the beauty of pipe! Custom helpers AND ember-core helpers can be strung together!

We then need to extend this `ember-curry-actions` mixin from the component in which you call sendAction
```javascript
// app/component/some-component.js
import Ember from 'ember';
import ClosureActionDispatchShim from 'ember-curry-helpers/mixins/closure-action-dispatch-shim';

var SomePikaDayComponent = Ember.Component.extend(ClosureActionDispatchShim, {
  actions: {
    onSelect: function(value){
      this.sendAction('on-select', value);
    }  
  }
});
```

## Other Helpers

* [ember-get-helper](https://github.com/jmurphyau/ember-get-helper)
* [ember-truth-helper](https://github.com/jmurphyau/ember-truth-helpers)
* 
## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
