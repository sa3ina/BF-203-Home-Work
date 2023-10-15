// 1. Son rəqəmi 7 olan bütün iki rəqəmli ədədləri çapa verən proqram tərtib edin.
// let num = 10;
// for (let i = 10; i < 99; i++) {
//   if (num % 10 == 7) {
//     console.log(num);
//   }
//   num++;
// }

// 2. Rəqəmləri eyni olan bütün iki rəqəmli ədədlərin çapa verən proqram tərtib edin.
// let num = 10;
// for (let i = 0; i < 99; i++) {
//   if (num % 11 == 0) {
//     console.log(num);
//   }
//   num++;
// }

// 3. Verilmiş ədədi rəqəmlərinə ayıran proqram tərtib edin.
// (ayri setirde)
// let num = Number(prompt("enter number"));
// let digit;
// while (num != 0) {
//   digit = num % 10;
//   num = Math.trunc(num / 10);
//   console.log(digit);
// }

// (eyni setirde)
// let num = Number(prompt("enter number"));
// let digits = [];
// while (num > 0) {
//   digits.unshift(num % 10);
//   num = parseInt(num / 10);
// }
// console.log(digits);

// 4. Verilmiş ədədin rəqəmlərindən ən böyük olanı təyin edən proqram tərtib edin.
// let num = Number(prompt("enter number"));
// let digit;
// let max = 0;
// while (num != 0) {
//   digit = num % 10;
//   num = Math.trunc(num / 10);
//   if (digit > max) {
//     max = digit;
//   }
// }
// console.log(max);

// 5. Verilmiş ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
// let num = Number(prompt("enter number"));
// let digit;
// let sum = 0;
// let product = 1;
// let len = 0;
// for (let i = 0; i < num; i++) {
//   digit = num % 10;
//   num = Math.trunc(num / 10);
//   sum = sum + digit;
//   product = product * digit;
//   len++;
// }
// console.log(sum);
// console.log(product);
// console.log(Math.trunc(sum / len));

// 6. Verilmiş ədədin bütün bölənlərini tapan proqram tərtib edin.
// let num = Number(prompt("enter number"));
// let divider = 1;
// for (let i = 0; i < num; i++) {
//   if (num % divider == 0) {
//     console.log(divider);
//   }
//   divider++;
// }

// 7. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// let num = Number(prompt("enter number"));
// let divider = 1;
// let a = 0;
// for (let i = 0; i < num; i++) {
//   if (num % divider == 0) {
//     a++;
//   }
//   divider++;
// }
// console.log(a);

// 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     console.log(i);
//   }
// }

// 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 1) {
//     console.log(arr[i]);
//   }
// }

// 10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//   }
// }
// console.log(max);

// 12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == min) {
//     console.log(i);
//   }
// }

// 13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// let max = arr[0];
// let maxindex;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == max) {
//     maxindex = i;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == min) {
//     arr.splice(i, 1, max);
//     arr.splice(maxindex, 1, min);
//   }
// }
// console.log(arr);

// 14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//   }
// }
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == max) {
//     maxindex = i;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == min) {
//     arr.splice(i, 1, max);
//     arr.splice(maxindex, 1, min);
//   }
// }
// console.log(arr);

// 15. ---Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let num = Number(prompt("enter number"));
// console.log(arr);
// console.log(arr.includes(num));

// 16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let sum = 0;
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum - min - max);

// 17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let index;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == true || arr[i] == false) {
//     index = i;
//     console.log(arr[index + 1]);
//   }
// }

// 18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// word = " ";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > word.length) {
//     word = arr[i];
//   }
// }
// console.log(word);

// 19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {
//     if (arr[i] == arr[i].toUpperCase()) {
//       console.log(arr[i]);
//       console.log(i);
//     }
//   }
// }

// 20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {
//     let count = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] >= "A" && arr[i][j] <= "Z") {
//         count++;
//       }
//       if (count > 2) {
//         console.log(arr[i]);
//       }
//     }
//   }
// }
