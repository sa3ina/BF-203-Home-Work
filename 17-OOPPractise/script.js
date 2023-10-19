// ------1
// class Person {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
//   getDetails() {
//     console.log(this.name, this.age, this.country);
//   }
// }
// let student1 = new Person("Sia", 23, "USA");
// let student2 = new Person("Jacob", 27, "Germany");
// console.log(student1.getDetails());
// console.log(student2.getDetails());

// ------2
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
//   getPerimeter() {
//     return (this.width + this.height) * 2;
//   }
// }
// let rectangle1 = new Rectangle(20, 30);
// console.log(rectangle1.getArea(), rectangle1.getPerimeter());

// ------3
// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   getDetails() {
//     console.log(this.make, this.model, this, year);
//   }
// }
// class Car extends Vehicle {
//   constructor(make, model, year, doors) {
//     super(make, model, year);
//     this.doors = doors;
//   }
//   getDetails() {
//     console.log(this.make, this.model, this.year, this.doors);
//   }
// }
// let car1 = new Car("Porsche", "GT3", 2022, 2);
// console.log(car1.getDetails());

// ------4
// class BankAccount {
//   constructor(number, balance) {
//     this.number = number;
//     this.balance = balance;
//   }
//   getDeposit(money) {
//     this.balance += money;
//     return this.balance;
//   }
//   getWithdraw(money) {
//     if (money < this.balance) {
//       this.balance -= money;
//       return money;
//     } else {
//       console.log("Not enough balance");
//     }
//   }
// }
// let account1 = new BankAccount(2231, 6000);
// console.log(account1.getDeposit(2000));
// console.log(account1.getWithdraw(10000));

// ------5
// class Shape {
//   getArea() {
//     return this.width * this.height;
//   }
// }
// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }
// class Triangle extends Shape {
//   constructor(height, base) {
//     super(height, base);
//     this.height = height;
//     this.base = base;
//   }
//   getArea() {
//     return (this.base * this.height) / 2;
//   }
// }
// let circle = new Circle(5);
// console.log(circle.getArea());
// let triangle = new Triangle(7, 5);
// console.log(triangle.getArea());

// ------6
// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.salary * 12;
//   }
// }
// class Manager extends Employee {
//   constructor(name, salary, department) {
//     super(name, salary);
//     this.department = department;
//   }
//   getSalary() {
//     let bonus = 0.2;
//     return this.salary * bonus + this.salary;
//   }
// }
// let person1 = new Manager("Diana", 3000, "HR");
// console.log(person1.getSalary());
// let person2 = new Manager("Simon", 4000, "IT");
// console.log(person2.getSalary());

// ------7
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getDetails() {
//     console.log(this.title, this.author, this.year);
//   }
// }
// class Ebook extends Book {
//   constructor(title, author, year, price) {
//     super(title, author, year);
//     this.price = price;
//   }
//   getDetails() {
//     console.log(this.title, this.author, this.year, this.price);
//   }
// }
// let journal = new Ebook("Fashion", "Sam Bakers", 2013, 30);
// console.log(journal.getDetails());

// ------8
// class Animal {
//   constructor(species, sound) {
//     this.species = species;
//     this.sound = sound;
//   }
//   getSound() {
//     console.log(this.sound);
//   }
// }
// class Tiger extends Animal {
//   constructor(species, sound, color) {
//     super(species, sound);
//     this.color = color;
//   }
//   getSound() {
//     console.log(this.sound);
//     console.log(this.color);
//   }
// }
// let tiger = new Tiger("cat", "rawrr", "brown");
// console.log(tiger.getSound());

// ------9
// class Bank {
//   constructor(name, branches) {
//     this.name = name;
//     this.branches = branches;
//   }
//   addBranch(branch) {
//     this.branches.push(branch);
//     return this.branches;
//   }
//   removeBranch(branch) {
//     this.branches.splice(branch, 1);
//     return this.branches;
//   }
//   getDetails() {
//     console.log(this.branches);
//   }
// }
// let bank1 = new Bank("Kapital", ["branch 1"]);
// let bank2 = new Bank("Yelo", ["branch 2"]);
// console.log(bank1.addBranch("branch a"));
// console.log(bank2.addBranch("branch b"));
// console.log(bank2.removeBranch("branch 2"));
// console.log(bank1.getDetails());

// ------10
// class Product {
//   constructor(ID, name, price) {
//     this.ID = ID;
//     this.name = name;
//     this.price = price;
//   }
//   getPrice(quantity) {
//     return this.price * quantity;
//   }
// }
// class PersonalCareProduct extends Product {
//   constructor(ID, name, price, period) {
//     super(ID, name, price);
//     this.period = period;
//   }
//   getPrice(quantity) {
//     return this.price * quantity + this.period;
//   }
// }
// let product1 = new PersonalCareProduct(1, "keyboard", 10, 2);
// console.log(product1.getPrice(3));

// ------11
// class BankAccount {
//   constructor(number, name, balance) {
//     this.number = number;
//     this.name = name;
//     this.balance = balance;
//   }
//   getDeposit(money) {
//     this.balance += money;
//     console.log(
//       `${money} deposited to ${this.name}.Current amount ${this.balance}`
//     );
//   }
//   getWithdraw(money) {
//     if (money < this.balance) {
//       this.balance -= money;
//       console.log(`${money} withdrawed. Current amount ${this.balance}`);
//     } else {
//       console.log("Not enough balance");
//     }
//   }
//   getTransfer(money, transferAccount) {
//     if (money < this.balance) {
//       this.balance -= money;
//       transferAccount.getDeposit(this.balance);
//       console.log(
//         `${money} transferred from ${this.name}.Current amount ${this.balance}`
//       );
//     } else {
//       console.log("Not enough balance");
//     }
//   }
// }
// let person1 = new BankAccount(2325, "Sophia", 3000);
// let person2 = new BankAccount(2827, "Philip", 2000);
// person1.getDeposit(500);
// person1.getWithdraw(500);
// person1.getTransfer(500, person2);

// ------12
// class University {
//   constructor(name, departments) {
//     this.name = name;
//     this.departments = departments;
//   }
//   addDepartment(department) {
//     this.departments.push(department);
//     return this.departments;
//   }
//   removeDepartment(department) {
//     this.departments.splice(department, 1);
//     return this.departments;
//   }
//   getDetails() {
//     return this.departments;
//   }
// }
// let department1 = new University("ITU", ["Management", "IT"]);
// console.log(department1.getDetails());
// console.log(department1.addDepartment("HR"));
// console.log(department1.removeDepartment("Management"));
