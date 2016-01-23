import Ember from 'ember';
import { pushHelper } from 'ember-curry-helpers/helpers/push';

var forExport = null;

if (Ember.Helper) {
  forExport = Ember.Helper.helper(pushHelper);
} else if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(pushHelper);
}

export default forExport;
