function myFetch(url, timeout) {
  return Promise.race([
    fetch(url),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`Timeout: ${timeout}ms`))
      }, timeout);
    })
  ])
}