//문제
//?특정 달(month)을 입력받아 각 달에 몇 일이 있는지 리턴해야 합니다.
/*
입력
인자 1 : month
number 타입의 정수 (1 <= month && month <= 12)
출력
number 타입을 리턴해야 합니다.
주의 사항
월 예시) 1월은 1, 2월은 2... 12월은 12입니다.
7월과 8월에는 모두 31일이 존재합니다.
2월 29일은 존재하지 않는다고 가정합니다.

[입출력 예시]

let output = daysInMonth(1);
console.log(output); // --> 31

output = daysInMonth(5);
console.log(output); // --> 31

output = daysInMonth(2);
console.log(output); // --> 28
*/
function daysInMonth(month) {
  if (month === 2) {
    return 28;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
  // TODO: 여기에 코드를 작성합니다.
}
//! 1월31 2월28 3월31 4월30 5월31 6월30 7월31 8월31 9월30 10월31 11월30 12월31
