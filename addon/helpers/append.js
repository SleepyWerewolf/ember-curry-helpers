export function appendHelper([arr]/*, hash*/) {
  return function(v) {
    return arr.concat(v);
  };
}
