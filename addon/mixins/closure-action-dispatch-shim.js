import Ember from 'ember';

export default Ember.Mixin.create({

  sendAction: function() {
    let [actionName, ...args] = arguments;
    let action = this.get(actionName);
    if (action && !!action.call) {
      action.apply(null, args);
    } else {
      this._super.apply(this, arguments);
    }
  }
});
