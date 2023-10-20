let arr = [1, 3, -4, 19, 25, 43, 67, 2, 3, -77];
//1--------
// let arr2 = arr.map((element) => Math.pow(element, 2));
// console.log(arr2);

//2--------
// let sum = 0;
// arr.forEach((element) => {
//   if (element > 0) {
//     sum += element;
//   } else {
//     return 0;
//   }
// });
// console.log(sum);

//3--------
// function getAverage(arr) {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum / arr.length;
// }
// function getMedian(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let median = (max + min) / 2;
//   return median;
// }
// console.log(getAverage(arr));
// console.log(getMedian(arr));

//4---------
// const str = "Lorem impsum dollar sit";
// function getElement(str) {
//   let words = str.split(" ");
//   let combined = "";

//   words.forEach((element) => {
//     if (element.length > 0) {
//       combined += element[0];
//     }
//   });
//   return combined;
// }

// const result = getElement(str);
// console.log(result);

//5--------
// function getElement(str) {
//   let words = str.split(" ");

//   let a = words.map((word) => {
//     if (word.length < 4) {
//       return word;
//     } else {
//       return word[0] + (word.length - 2) + word[word.length - 1];
//     }
//   });
//   return a.join(" ");
// }
// console.log(getElement("Salam Baku youth is here"));
