

function parse(str) {
  const paramList = str.split('&');
  var result = {};
  paramList.forEach((paramStr) => {
    const strList = paramStr.split('=');
    var name = strList[0] || '';
    var value = strList[1] || '';
    if (result.hasOwnProperty(name)) {
      if (Array.isArray(result[name])) {
        result[name].push(value);
      } else {
        var temp = result[name];
        result[name] = [temp, value]
      }
    } else {
      result[name] = value
    }
  });
  return result;
}

var str = 'abc=1&b=2&c=3&d=4&d=5&e=6&f=7&g=&h='
parse(str);


// 002

function getUrlParams(url) {
  const reg = /(?<key>[^\?^\=^\&]+?)=(?<value>[^\=^\&^\#]+?)/g;
  const params = {};
  let match = reg.exec(url);
  while (match !== null) {
    params[match.groups.key] = match.groups.value
    match = reg.exec(url);
  }
  return params;
}

var url = "https://www.a.com/index?a=1&b=2&c=3#abc"
console.log(getUrlParams(url))