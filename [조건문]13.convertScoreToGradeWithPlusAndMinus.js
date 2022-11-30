// 문제
//? 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
/*
입력
인자 1 : score
number 타입의 정수
출력
string 타입을 리턴해야 합니다.
각 등급의 최저 점수는 아래와 같습니다. ('F'의 경우 최대 점수를 표기)
90 이상 --> 'A'
80 이상 --> 'B'
70 이상 --> 'C'
60 이상 --> 'D'
60 미만 --> 'F'
주의 사항
만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다. (단, 93점의 경우에는 A를 리턴해야 합니다.)
각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
F+ 와 F- 는 존재하지 않습니다.

[입출력 예시]
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
  let str = String(score); // score -> 숫자 31
  // -> "31" (o) , 31 (x) typeof(score) ==> 'string'
  // str = '31'
  // str[1] = 1
  if (str[1] > 7 || str[2]) {
    str = "+";
  } else if (str[1] < 4) {
    str = "-";
  } else {
    str = "";
  }
  if (!(0 <= score && score <= 100)) {
    return "INVALID SCORE";
  }
  // TODO: 여기에 코드를 작성합니다.

  if (score >= 90 && 100 >= score) {
    return "A" + str;
  }
  if (score >= 80 && 90 > score) {
    return "B" + str;
  }
  if (score >= 70 && 80 > score) {
    return "C" + str;
  }
  if (score >= 60 && 70 > score) {
    return "D" + str;
  } else {
    return "F";
  }
}
