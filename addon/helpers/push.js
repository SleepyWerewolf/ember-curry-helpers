export function pushHelper([arr]/*, hash*/) {
  return function(v) {
    return arr.concat(v);
  };
}
