import Ember from 'ember';
import { registerHelper } from 'ember-curry-helpers/utils/register-helper';

import { pipeHelper } from 'ember-curry-helpers/helpers/pipe';
import { appendHelper } from 'ember-curry-helpers/helpers/append';
import { closureActionHelper } from 'ember-curry-helpers/helpers/closure-action';

export function initialize(/* container, application */) {

  // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
  // will be auto-discovered.
  if (Ember.Helper) {
    return;
  }

  registerHelper('pipe', pipeHelper);
  registerHelper('append', appendHelper);
  registerHelper('closureActionHelper', closureActionHelper);
}

export default {
  name: 'curry-helpers',
  initialize: initialize
};
