// 
/*
function modifyObject(target, names) {
  // TODO
}

modifyObject({ a: 123}, 'b.c.d.e.f.g')
// { a: 123, b: { c: d: { e: { f: { g: {} } } } } }

*/

function modifyObject(target, names) {
  let obj = target;
  const nameList = names.split('.');
  function _modify(t, list) {
    const name = list.shift();
    t[name] = {};
    obj = t[name];
  }
  while(nameList.length > 0) {
    _modify(obj, nameList);
  }
  return target;
}

modifyObject({ a: 123}, 'b.c.d.e.f.g')




