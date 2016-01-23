export function pipeHelper(params/*, hash*/) {
  let [...functions] = params;
  return function() {
    let args = Array.prototype.slice.call(arguments);
    functions.forEach(function(f) {
      if (typeof f === "function") {
        args = f.apply(null, [args]);
      } else {
        args = f;
      }
    });
  };
}
