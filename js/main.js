1. Функция, которая принимает на вход два числа и возвращает их сумму:

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(5, 7)); // Output: 12


2. Функция, которая принимает на вход массив чисел и возвращает их среднее значение:

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(average([1, 2, 3, 4, 5])); // Output: 3


3. Функция, которая принимает на вход строку и возвращает ее длину:

function stringLength(str) {
  return str.length;
}

console.log(stringLength("Hello, world!")); // Output: 13


4. Функция, которая принимает на вход массив чисел и возвращает массив с квадратами этих чисел:

function squareArray(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * numbers[i]);
  }
  return result;
}

console.log(squareArray([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]


5. Функция, которая принимает на вход массив строк и возвращает строку, состоящую из всех элементов массива, разделенных запятой:

function joinStrings(strings) {
  return strings.join(", ");
}

console.log(joinStrings(["apple", "banana", "orange"])); // Output: "apple, banana, orange"


6. Функция, которая принимает на вход число и проверяет, является ли оно четным:

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true


7. Функция, которая принимает на вход массив чисел и возвращает новый массив, состоящий только из четных чисел:

function filterEven(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(filterEven([1, 2, 3, 4, 5])); // Output: [2, 4]


8. Функция, которая принимает на вход два массива и возвращает новый массив, состоящий из элементов обоих массивов:

function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(concatArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]


9. Функция, которая принимает на вход строку и возвращает ее в обратном порядке:

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("hello")); // Output: "olleh"


10. Функция, которая принимает на вход массив объектов и возвращает новый массив, состоящий только из тех объектов, у которых свойство "age" больше или равно заданному значению:

function filterByAge(objects, age) {
  let result = [];
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].age >= age) {
      result.push(objects[i]);
    }
  }
  return result;
}

console.log(filterByAge([{name: "John", age: 25}, {name: "Mary", age: 30}, {name: "Bob", age: 20}], 25)); // Output: [{name: "John", age: 25}, {name: "Mary", age: 30}]
