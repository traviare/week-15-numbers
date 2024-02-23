const numbers = [];

let number = -11;
for (let i = 0; i <= 20; i++) {
  number += 1;
  numbers.push(number);
}
console.log(numbers);

// Удалите все отрицательные числа из массива
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numbers.shift();
    i--;
  }
}
console.log(numbers);
// Возведите каждое число в квадрат
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}
console.log(numbers);

// Отсортируйте числа в порядке убывания
for (let i = 0; i < numbers.length; i++) {
  for (let a = 0; a < numbers.length; a++) {
    if (numbers[i] > numbers[a]) {
      let b = numbers[i];
      numbers[i] = numbers[a];
      numbers[a] = b;
    }
  }
}

console.log(numbers);
