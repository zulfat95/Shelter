// const printNumbers = (from, to) => {
//   let i = from;
//   while(i <= to) {
//     console.log(i);
//     i++;
//     }
// };

setTimeout(function print(from, to) {
  for (let i = from; i <= to; i++) {
    console.log(i);
  }
  // setTimeout(print, 2000, 1,3);
}, 1000);
  
 
// setInterval(printNumbers, 2000, 1,3);
// printNumbers(1,3);
//  let timerId = setTimeout(printNumbers, 1000, 1, 3); 
//  clearInterval(timerId);