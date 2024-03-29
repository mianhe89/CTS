/*
우리가 웹 브라우저에 적혀있는 정보를 가져오면 보통 string의 형태로 받아오게 됩니다.
즉, 숫자로 세고 싶은 정보도 string으로 인식하기 때문에, 정상적인 숫자를 위한 연산을 수행할 수 없습니다.

이를 해결하기 위해서 타입을 변경하는 방법에 대해서 알아볼까요?
number로 변경하기 위해서는 Number() 함수를 사용해서 변경할 수 있습니다.

1 Number('100'); // 100

문제를 직접 풀어보면서 변경해볼까요?
*/
//?문제
//TODO : 임의의 값을 입력받아 수(number)의 형태로 리턴해야 합니다.

/*
.입력
인자 1 : anything
임의의 값
.출력
number 타입을 리턴해야 합니다.
.주의 사항
number, string, boolean 타입만 입력됩니다.
입력값을 수로 변환할 수 없는 경우, NaN을 리턴해야 합니다.
NaN은 수가 아님을 나타내는 특수한 값으로, 문자열이 아닙니다.
입출력 예시
1 let output = convertToNumber('123');
2 console.log(output); // --> 123
3
4 let output2 = convertToNumber('hello');
5 console.log(output2); // --> NaN
6
7 let output3 = convertToNumber('3.141952');
8 console.log(output3); // --> 3.141952
*/

function convertToNumber(anything) {
  anything = "hi";
  if (typeof anything === "number") {
    console.log(anything);
    return anything;
  } else {
    console.log("NaN");
    return NaN;
  }

  // TODO: 여기에 코드를 작성합니다.
}
convertToNumber();
