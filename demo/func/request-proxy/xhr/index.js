const originFetch = fetch;
Object.defineProperty(window, "fetch", 
{
  configurable: true,
  enumerable: true,
  // writable: true,
  get() {
    return (url,options) => {
      return originFetch(
        url,
        {
          ...options,
          ...{
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              Accept: 'application/json',
            },
            ...options.headers
          }
        }
      ).then((res) => {
        console.log('res ====', res)
        return res;
      }).then(response => {
        return response.json();
      })
    }
  }
}

);
