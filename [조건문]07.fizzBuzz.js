//문제
//?수를 입력받아 3 그리고 5로 각각 나눈 뒤 나머지 값에 따라 알맞은 메시지를 리턴해야 합니다.
/*
입력
인자 1 : num
number 타입의 정수 (num >= 1)
출력
string 타입을 리턴해야 합니다.
3으로 나누어 떨어지는 경우, 'Fizz'를 리턴해야 합니다.
5으로 나누어 떨어지는 경우, 'Buzz'를 리턴해야 합니다.
3과 5로 모두 나누어 떨어지는 경우, 'FizzBuzz'를 리턴해야 합니다.
3이나 5로 나누어 떨어지지 않는 경우, 'No FizzBuzz'를 리턴해야 합니다.

[입출력 예시]

let output = fizzBuzz(3);
console.log(output); // --> 'Fizz'

output = fizzBuzz(5);
console.log(output); // --> 'Buzz'

output = fizzBuzz(15);
console.log(output); // --> 'FizzBuzz'

output = fizzBuzz(7);
console.log(output); // --> 'No FizzBuzz'

*/
function fizzBuzz(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (!(num % 3) && !(num % 5)) {
    return "FizzBuzz";
  }
  if (!(num % 3)) {
    return "Fizz";
  }
  if (!(num % 5)) {
    return "Buzz";
  }
  return "No FizzBuzz";
}

//! else if 와 if 의 차이 else 는 if 에서 값이 도출될경우 그 다음 if 문을 실행하지 않는다.
