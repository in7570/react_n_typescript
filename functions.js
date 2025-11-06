// 1) 함수 선언문 (Function Declaration)
function add(a, b) {
  return a + b;
}
console.log('선언문:', add(1, 2)); // 3

// 2) 함수 표현식 - 익명 (Anonymous Function Expression)
const sub = function (a, b) {
  return a - b;
};
console.log('표현식-익명:', sub(5, 3)); // 2

// 3) 함수 표현식 - 기명 (Named Function Expression)
const mul = function multiply(a, b) {
  return a * b;
};
console.log('표현식-기명:', mul(2, 4)); // 8
// console.log(multiply(2,4)); // ReferenceError(이름은 내부용)

// 4) 생성자 함수 (Constructor Function)
function Person(name) {
  this.name = name;
}
Person.prototype.say = function () {
  return `안녕, 나는 ${this.name}`;
};
const p = new Person('Alice');
console.log('생성자 함수:', p.say()); // 안녕, 나는 Alice

// 5) 화살표 함수 (Arrow Function)
const div = (a, b) => a / b;
console.log('화살표 함수:', div(10, 2)); // 5

// 6) 즉시 실행 함수 (IIFE)
const iifeResult = (function () {
  const x = 21;
  return x * 2;
})();
console.log('IIFE:', iifeResult); // 42

// 7) 재귀 함수 (Recursive Function)
function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
}
console.log('재귀:', fact(5)); // 120

// 8) 중첩 함수 (Nested Function)
function outer(msg) {
  function inner() {
    return `[inner] ${msg}`;
  }
  return inner();
}
console.log('중첩 함수:', outer('hello'));
// [inner] hello

// 9) 콜백 함수 (Callback Function)
function greet(name, callback) {
  const message = `안녕, ${name}`;
  callback(message);
}
greet('Bob', (msg) => console.log('콜백:', msg)); // 콜백: 안녕, Bob
