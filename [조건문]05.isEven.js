//? 수를 입력받아 짝수인지 여부를 리턴해야 합니다.
/*
입력
인자 1 : num
number 타입의 정수 (num >= 0)
출력
boolean 타입을 리턴해야 합니다.
주의 사항
0은 짝수로 간주합니다.
입출력 예시

1 let output = isEven(11);
2 console.log(output); // --> false

힌트
짝수(even number)와 홀수(odd number)의 차이를 검색해 봅니다. (js check even number)
*/
function isEven(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num % 2 === 0) {
    return true;
  } else return false;
}
//!  " / " : = 몫을 구한다.
//!  " % " : = 나머지를 구한다.
