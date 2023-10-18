// let str = " Genius";
// let str2=" Gen"
// console.log(str.match("s"))
// console.log(str.repeat(2))
// console.log(str.search(" "))
// console.log(str.localeCompare(str2))
// console.log(str.valueOf())
// console.log(String.raw`\u2607`);
// console.log(str.length);
// console.log(str.slice(2, 4));
// console.log(str.substring(1, 3));
// console.log(str.substr(1,3))
// console.log(str.replace("Ge", "hi"));
// console.log(str.replaceAll("n","="));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat("dostum","ii"));
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.padStart(10, "0"));
// console.log(str.padEnd(10, "."));
// console.log(str.charAt(1));
// console.log(str.charCodeAt(0));
// console.log(str.split(""));
// console.log(str.endsWith("us"))
// console.log(str.startsWith(" "))
// console.log(String.fromCharCode(37))
// console.log(str.includes("p"))
// console.log(str.indexOf("S"))
// console.log(str.lastIndexOf("n"))

// ------1------
// let str = "i_m_a_student";
// console.log(str.replaceAll("_", "-"));

// ------2------
// let str = "IMHerE";
// myfunc = (str) => {
//   let answer = str.toLowerCase();
//   return answer;
// };
// console.log(myfunc(str));

// ------3------
// let str = " bosluqvar ";
// let myfunc = function (str) {
//   let answer = str.trim().split("");
//   return answer;
// };
// console.log(myfunc(str));

// ------4------
// let str = "Robin Singh from USA";
// myfunc = (str) => {
//   let answer = str.toLowerCase().replaceAll(" ", "-");
//   return answer;
// };
// console.log(myfunc(str));

// ------5------
// let str = "js string exercises";
// function myfunc() {
//   let answer = str.charAt(0).toUpperCase() + str.slice(1);
//   return answer;
// }
// console.log(myfunc(str));

// ------6------
// let str = "SCvdsHfJ";
// let count = 0;
// let myfunc = function (str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()&&str[i].trim()!=" ") {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(myfunc(str));

// ------7------
// let str = "Hello world";
// let word = "world";

// function myfunc(word, str) {
//   let obj = {
//     isFound: false,
//     index: -1,
//   };
//   if (str.trim().includes(word)) {
//     (obj.isFound = true), (obj.index = str.indexOf(word));
//   }
//   return obj;
// }
// console.log(myfunc(word, str));

// ------8------
function Human(name, surname, birthYear, birthCity) {
  this.name = name;
  this.surname = surname;
  this.birthCity = birthCity;
  this.birthYear = birthYear;
  this.getFullName = function () {
    return this.name + " " + this.surname;
  };
}
const joe = new Human("Joe", "Smith", 1980, "Chicago");
const joe2 = new Human("Joe", "Beckham", 1980, "Chicago");
const jane = new Human("Jane", "Smith", 1984, "New York");
const adam = new Human("Adam", "Sandler", 1999, "Chicago");
let people = [];
people.push(joe, joe2, jane, adam);

let searchInput = prompt("search for human: ");

function searchHuman(search, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let fullName = arr[i].getFullName();
    if (
      arr[i].name.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
      arr[i].surname
        .toLowerCase()
        .trim()
        .includes(search.toLowerCase().trim()) ||
      fullName.toLowerCase().trim().includes(search.toLowerCase().trim())
    ) {
      result.push(arr[i]);
    }
  }
  if (result.length) {
    return result;
  } else {
    return alert(`not found ${search}`);
  }
}

let resultArr = searchHuman(searchInput, people);
console.log(resultArr);
