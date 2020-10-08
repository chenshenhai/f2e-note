function compose(list) {
  return function(ctx) {
    return dispatch(0);
    function dispatch(i) {
      const fn = list[i];
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(fn(ctx, () => {
        return dispatch(i + 1);
      }))
    }
  }
}

const list = [];
list.push(async (ctx, next) => {
  console.log('001');
  await next();
  console.log('006');
})
list.push(async (ctx, next) => {
  console.log('002');
  await next();
  console.log('005');
})
list.push(async (ctx, next) => {
  console.log('003');
  await next();
  console.log('004');
})
const fns = compose(list);
fns({}).then(() => {
  // .....
});