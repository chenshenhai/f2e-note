function parse(route, path) {
  const routeList = [];
  const keys = [];
  route.split('/').forEach((item) => {
    if (item.indexOf(':') === 0) {
      routeList.push('([^\/]+?)');
      keys.push(item.replace(/^:/, ''));
    } else {
      routeList.push(item);
    }
  });
  const reg = new RegExp(`^${routeList.join('/')}$`);
  const res = path.match(reg);
  const params = {};
  if (res && res.length > 0) {
    keys.forEach((key, i) => {
      if (typeof res[i + 1] === 'string') {
        params[key] = res[i + 1];
      }
    })
  }
  return params;
}

console.log(parse('/page/:pageId/:postId', '/page/123/abc'));

console.log(parse('/page/:pageId/:postId', '/user/123/abc'));