import Ember from 'ember';
import { pipeHelper } from 'ember-curry-helpers/helpers/pipe';

var forExport = null;

if (Ember.Helper) {
  forExport = Ember.Helper.helper(pipeHelper);
} else if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(pipeHelper);
}

export default forExport;
