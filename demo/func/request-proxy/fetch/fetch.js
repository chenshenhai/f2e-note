const originFetch = fetch;
const proxyConfig = {
  '/hello/world': { data: { hello: 'world' }, success: true }
}

const newFetch = function (url, params) {
  if (!proxyConfig[url]) {
    return originFetch(url, params)
  }
  return new Promise((resolve, reject) => {
    const result = {
      json: () => new Promise((resolve, reject) => {
        resolve(proxyConfig[url])
      })
    }
    resolve(result)
  })
}

newFetch.__MOCK__ = true;

window.fetch = newFetch;
