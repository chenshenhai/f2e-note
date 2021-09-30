console.log('__MOCK__ =', fetch.__MOCK__)

fetch('/hello/world', {}).then(res => res.json())
  .then((res) => {
    console.log('res ====', res);
  }).catch(console.log)

// const p1 = fetch('/hello/world', {});

// console.log('p1 =', p1)