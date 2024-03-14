"use strict";
// task 1
// ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let i = 5; i <= 100; i++) {
  console.log(i);
}

// task 2
// მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  const el = array1[i];
  if (el > 0 && el < 10) {
    console.log(el);
  }
}

// task 3
// მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of array2) {
  if (i == 5) {
    console.log("არის");
    break;
  }
}

// task 4
// მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++) {
  const el = array3[i];
  sum += el;
}
console.log(`რიცხვების ჯამია : ${sum}`);

// task 5
// let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 4, 5];
sum = 0;
for (let i = 0; i < array4.length; i++) {
  const el = array4[i];
  sum += el;
}
let averageArithmetic = sum / array4.length;
console.log(averageArithmetic);

// task 6
// მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
// let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];

for (let i of array5) {
  if (i == 7) {
    continue;
  }
  console.log(i);
}

// task 7
// მოცემულია ობიექტი:
// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
//   };
//   ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);

// task 8
// მოცემულია ობიექტი:
// let user2 = {
//     name: 'anna',
//     age:  20,
//     studentstatus: 'active'
// }
// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;

let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};
// old if statement

if (user2.age < 18 && user2.studentstatus == "active") {
  console.log("Hello user!");
} else if (user2.name == "levan") {
  console.log("Hello Levani!");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("Hello Anna!");
} else {
  console.log("Error!");
}

// new if statement

let user2Checker =
  user2.age < 18 && user2.studentstatus == "active"
    ? "Hello user!"
    : user2.name == "levan"
    ? "Hello Levani!"
    : user2.studentstatus == "active" || user2.age < 25
    ? "Hello Anna!"
    : "Error!";
console.log(user2Checker);

// task 9
// მოცემულია მასივი:
// let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// ამოიღეთ მხოლოდ ლუწი რიცხვები

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let i of array6) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// task 10
// მოცემულია მასივი
// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]
// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
  {
    username: "giorgi",
    status: false,
  },
  {
    username: "levani",
    status: false,
  },
  {
    username: "anna",
    status: true,
  },
];

for (let i = 0; i < users.length; i++) {
  let user = users[i];
  if (user.status == true) {
    console.log(user);
  }
}

// task 11
//
// Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
// let array7 = [32, 14, null, ‘40’, 50];

let array7 = [32, 14, null, "40", 50];

for (let i of array7) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

// task 12
// Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
// Let array8 = [ [2, -3, 5, 11], [1, -35, –11], [12, -36, -24] ];
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (let i = 0; i < array8.length; i++) {
  const subArray = array8[i];
  for (let j = 0; j < subArray.length; j++) {
    const num = subArray[j];
    if (num > 0) {
      console.log(num);
    }
  }
}
