"use strict";

// task 1
// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

let sumFnc = (...sumArray) => {
  let sumEl = 0;
  for (let i of sumArray) {
    sumEl += i;
  }
  return sumEl;
};

let sumResult = sumFnc(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sumResult);

// task 2
//let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }

//   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ:
//   'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

let getFullNameAndStatus = () => {
  let status = user.isloggedin
    ? `${user.firstname} ${user.lastname} - true`
    : `${user.firstname} ${user.lastname} - false`;
  console.log(status);
};
getFullNameAndStatus();

// task 3
//შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// (აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max )

let numbers = (...numbersArray) => {
  console.log(Math.max(...numbersArray));
};

numbers(10, 50, 6, 7, 8, 11, 6, 3, 9);

// task 4
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს
// და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი;
// თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

let isEvenOrOdd = (x) => {
  if (x % 2 === 0) {
    return "this number is even";
  }
  return "this number is odd";
};

let fncResult = isEvenOrOdd(15);
console.log(fncResult);

// task 5

// მოცემულია მასივი:
// let array = [1,2,3,4,5];
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let el of array) {
  reversedArray.unshift(element);
}

console.log(reversedArray);

// task 6
// ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა,
// თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userAgeCheck = (x) => {
  let userAge = x >= 18 ? "Srulwlovani" : "Arasrulwlovani";
  console.log(userAge);
};

userAgeCheck(14);
