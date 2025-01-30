// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

//process-01
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i === 1) {
    console.log(i);
    continue;
  }
  for (let j = 1; j <= i / 2; j++) {
    if (j * j == i) {
      count++;
        break;
    }
  }
  if (count !== 1) {
    console.log(i);
  } else {
    console.log("Encountered first square number: ", i);
    break;
  }
}

//process-02
// let count = 0;
// for (let i = 11; i <= 100; i++) {
//   for (let j = 1; j <= i/2; j++) {
//     if (i === 1) {
//         continue;
//       }
//    else if (j * j == i) {
//      count++;
//     }
//   }
//   if (count !== 1) {
//     console.log(i);
//   }
//   else {
//     console.log("Encountered first square number: ", i);
//      break;
//   }
// }
