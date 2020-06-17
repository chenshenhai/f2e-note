const urls = [
  'https://unpkg.com/react/package.json?v=01',
  'https://unpkg.com/react/package.json?v=02',
  'https://unpkg.com/react/package.json?v=03',
  'https://unpkg.com/react/package.json?v=04',
  'https://unpkg.com/react/package.json?v=05',
  'https://unpkg.com/react/package.json?v=06',
]

function maxReq(urls, max) {
  const urlMap = {};
  const result = [];
  urls.forEach((url, i) => {
    urlMap[url] = i;
    result.push(null);
  });
  const fetchUrls = [];
  return new Promise((resolve) => {
    function action() {

      if (fetchUrls.length >= max) {
        return false;
      }
      if (urls.length === 0) {
        return true;
      }

      for (let i = fetchUrls.length; i < max; i++) {
        const url = urls.shift();
        fetchUrls.push(url);
        fetch(url).then((res) => {
          const idx = urlMap[url];
          result[idx] = res;
          fetchUrls.splice(fetchUrls.indexOf(url), 1);
          const status = action();
          if (fetchUrls.length === 0 && urls.length === 0 && status === true) {
            resolve(result);
          }
        }).catch((err) => {
          const idx = urlMap[url];
          result[idx] = err;
          fetchUrls.splice(fetchUrls.indexOf(url), 1);
          const status = action();
          if (fetchUrls.length === 0 && urls.length === 0 && status === true) {
            resolve(result);
          } 
        })
      }
      console.log(fetchUrls);
      return false;
    }
    action();
  })
}


async function main() {
  const list = await maxReq(urls, 3);
  console.log(list);
}

main();