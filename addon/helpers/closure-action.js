export function closureActionHelper(params/*, hash*/) {
  var controller = this.get('controller');
  return function() {
    controller.send.apply(controller, params.concat(...arguments));
  };
}
