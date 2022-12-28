/**
 * Type Inference (타입 추론)
 */

let text = 'hello'; // text에 hello를 할당하면서 text는 string으로 타입이 추론됨.
// text = 5;   // string이 아닌 다른 타입의 데이터를 할당하면 error

// 따로 명시하지 않으면 message는 any로 타입이 추론됨. -> 좋지 않다.
// function print(message) {
//   console.log(message);
// }

// default parameter를 할당하면 타입스크립트가 타입을 추론한다.
function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

// 타입이 추론되긴 하지만, 타입은 정확하게 명시하는 것이 좋다!