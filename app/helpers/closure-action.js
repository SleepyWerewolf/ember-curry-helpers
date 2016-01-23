import Ember from 'ember';
import { closureActionHelper } from 'ember-curry-helpers/helpers/closure-action';

var forExport = null;

// Only export for Ember 1.12 and below
// Closure Actions come built-in starting Ember 1.13
if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(closureActionHelper);
}

export default forExport;
