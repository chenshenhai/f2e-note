// function parse(str) {
//   // str
//   if(/^rgb\(([0-9]{1,3})\,[\s]{0,}([0-9]{1,3})\,[\s]{0,}([0-9]{1,3})\)$/i.test(str) !== true) {
//     return null;
//   }
//   const list = str.match(/([0-9]{1,})/ig);
//   const num1 = list[0] * 1;
//   const num2 = list[1] * 1;
//   const num3 = list[2] * 1;
//   return `#${num1.toString(16)}${num2.toString(16)}${num3.toString(16)}`
// }

// console.log(parse('rgb(255, 255, 255)')) // '#ffffff'
// console.log(parse('rgb(33, 150, 243)')) // '#2196f3'
// console.log(parse('rgb(255)')) // null
// console.log(parse('rgb(255, 11)')) // null


// function parse(str) {
//   if (/^\#[0-9a-f]{3,3}$/ig.test(str)) {
//     str = str.replace(/[0-9a-f]/ig, (m) => m+m);
//   }
//   if (/^\#[0-9a-f]{6,6}$/ig.test(str)) {
//     const list = [];
//     str.replace(/[0-9a-f]{2,2}/ig, (m) => {
//       list.push(`0x${m}` * 1);
//     });
//     return `rgb(${list.join(', ')})`
//   } else {
//     return null;
//   }
// }

// console.log(parse('#ffffff')) // 'rgb(255, 255, 255)'
// console.log(parse('#2196f3')) // 'rgb(33, 150, 243)'
// console.log(parse('#fff')) //'rgb(255, 255, 255)'
// console.log(parse('#ff')) // null
// console.log(parse('#f')) // null
// console.log(parse('#fffff')) // null


