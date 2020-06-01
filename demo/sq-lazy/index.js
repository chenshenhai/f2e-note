function squareAsync(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(x * x);
    }, 1000);
  })
}

const list = [1,2,3,4];

// function main(list) {
//   list.forEach(async (i) => {
//     const rs = await squareAsync(i);
//     console.log(rs);
//   })
// }

function main(list) {
  function compose(fnList) {
    return function(ctx) {
      return dispatch(0);
      function dispatch(i) {
        const fn = fnList[i];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(fn(ctx, () => {
          dispatch(i + 1);
        }))
      }
    }
  }

  const fns = list.map((i) => {
    return async (ctx, next) => {
      const rs = await squareAsync(i);
      console.log(rs);
      await next();
    }
  });
  const comp = compose(fns);
  comp({}).then(() => {
    // ...
  })
}

main(list);