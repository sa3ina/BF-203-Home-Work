// 1. İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin
// let num1 = Number(prompt("birinci ededi daxil edin"));
// let num2 = Number(prompt("ikinci ededi daxil edin"));
// let num3 = Number(prompt("ucuncu ededi daxil edin"));
// if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
//   alert("ucbucagin terefidir");
// } else if (num1 <= 0 || num2 <= 0 || num3 >= 0) {
//   alert("ucbucagin terefi 0 ve ya menfi ola bilmez");
// } else {
//   alert("ucbucagin terefleri ola bilmez");
// }

// 2. İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.
// let num1 = Number(prompt("birinci ededi daxil edin"));
// let num2 = Number(prompt("ikinci ededi daxil edin"));
// let num3 = Number(prompt("ucuncu ededi daxil edin"));
// if (num1 == num2 && num2 == num3) {
//   alert("ucbucag berabertereflidir");
// } else {
//   alert("ucbucaq beraberterefli deyil");
// }

// 3. İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin
// let num1 = Number(prompt("birinci ededi daxil edin"));
// let num2 = Number(prompt("ikinci ededi daxil edin"));
// if (num1 > num2) {
//   alert(`${num1} boyukdur`);
// } else if (num1 < num2) {
//   alert(`${num2} boyukdur`);
// } else {
//   alert(`${num1} ${num2} beraberdir`);
// }

// 4. İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.
// let num1 = Number(prompt("birinci ededi daxil edin"));
// let num2 = Number(prompt("ikinci ededi daxil edin"));
// let num3 = Number(prompt("ucuncu ededi daxil edin"));

// if (num1 === num2 && num1 === num3) {
//   alert("Butun ededler beraberdir");
// } else {
//   let num;

//   if (num1 >= num2 && num1 >= num3) {
//     num = num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     num = num2;
//   } else {
//     num = num3;
//   }
//   alert(`En boyuk eded: ${num}`);
// }

// 5. İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin.
// let num1 = Number(prompt("birinci ededi daxil edin"));
// let num2 = Number(prompt("ikinci ededi daxil edin"));
// let num3 = Number(prompt("ucuncu ededi daxil edin"));

// if (num1 <= num2 && num1 <= num3) {
//   if (num2 <= num3) {
//     alert(`${num1} ${num2} ${num3}`);
//   } else {
//     alert(`${num1} ${num3} ${num2}`);
//   }
// } else if (num2 <= num1 && num2 <= num3) {
//   if (num1 <= num3) {
//     alert(`${num2} ${num1} ${num3}`);
//   } else {
//     alert(`${num2} ${num3} ${num1}`);
//   }
// } else {
//   if (num1 <= num2) {
//     alert(`${num3} ${num1} ${num2}`);
//   } else {
//     alert(`${num3} ${num2} ${num1}`);
//   }
// }
