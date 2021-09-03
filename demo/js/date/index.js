
// var regDate = /(?<year>[0-9]{1,4})-(?<month>[0-9]{1,2})-(?<day>[0-9]{1,2})\s(?<hour>[0-9]{1,2}):(?<minute>[0-9]{1,2}):(?<second>[0-9]{1,2})/;
// regDate.exec('2021-01-02 12:34:59')?.groups
// {year: "2021", month: "01", day: "02", hour: "12", minute: "34", second: "59"}
function parse(str) {
  var reg = /(?<year>[0-9]{1,4})-(?<month>[0-9]{1,2})-(?<day>[0-9]{1,2})\s(?<hour>[0-9]{1,2}):(?<minute>[0-9]{1,2}):(?<second>[0-9]{1,2})/;
  return reg.exec(str)?.groups
}

console.log(parse('2022-12-31 59:49:39'))
/*
输出
{
  "year": "2022",
  "month": "12",
  "day": "31",
  "hour": "59",
  "minute": "49",
  "second": "39"
}
*/
console.log(parse('2022-01-01 01:02:03'))
/*
输出
{
  "year": "2022",
  "month": "01",
  "day": "01",
  "hour": "01",
  "minute": "02",
  "second": "03"
}
*/



function parseDatetime(str) {
  // TODO
}

console.log(parseDatetime('2022-12-31 59:49:39'))
/*
输出
{
  "year": "2022",
  "month": "12",
  "day": "31",
  "hour": "59",
  "minute": "49",
  "second": "39"
}
*/
console.log(parseDatetime('2022-01-01 01:02:03'))
/*
输出
{
  "year": "2022",
  "month": "01",
  "day": "01",
  "hour": "01",
  "minute": "02",
  "second": "03"
}
*/
// -----

function parseDatetime(str) {
  var reg = /(?<year>[0-9]{1,4})-(?<month>[0-9]{1,2})-(?<day>[0-9]{1,2})\s(?<hour>[0-9]{1,2}):(?<minute>[0-9]{1,2}):(?<second>[0-9]{1,2})/;
  return reg.exec(str)?.groups
}

console.log(parseDatetime('2022-12-31 59:49:39'))
console.log(parseDatetime('2022-01-01 01:02:03'))