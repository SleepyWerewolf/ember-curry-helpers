import Ember from 'ember';
import { appendHelper } from 'ember-curry-helpers/helpers/append';

var forExport = null;

if (Ember.Helper) {
  forExport = Ember.Helper.helper(appendHelper);
} else if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(appendHelper);
}

export default forExport;
