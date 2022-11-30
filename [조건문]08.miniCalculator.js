//문제
//?두 개의 수와 기호를 입력받아 알맞게 계산한 값을 리턴해야 합니다.
/*
입력
인자 1 : num1
number 타입의 정수
인자 2 : num2
number 타입의 정수
인자 3 : operator
string 타입의 기호 ('+', '-', '*', '/')
출력
number 타입을 리턴해야 합니다.
[입출력 예시]
let output = miniCalculator(3, 4, '+');
console.log(output); // --> 7

output = miniCalculator(9, 3, '/');
console.log(output); // --> 3
*/
function miniCalculator(num1, num2, operator) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
    return result;
  } else if (operator === "-") {
    result = num1 - num2;
    return result;
  } else if (operator === "*") {
    result = num1 * num2;
    return result;
  } else if (operator === "/") {
    result = num1 / num2;
    return result;
  }
}
