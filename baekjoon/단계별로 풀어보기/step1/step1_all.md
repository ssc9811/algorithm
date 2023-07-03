## 입출력과 사칙연산

1. [Hello World](./Hello%20World.md)
1. [A+B](./A%2BB.md)
1. [A-B](./A-B.md)
1. [A\*B](./A*B.md)
1. [A/B](./A%EF%BC%8FB.md)
1. [사칙연산](./%EC%82%AC%EC%B9%99%EC%97%B0%EC%82%B0.md)
1. [??!](./%3F%3F!.md)
1. [1998년생인 내가 태국에서는 2541년생?!](./1998%EB%85%84%EC%83%9D%EC%9D%B8%20%EB%82%B4%EA%B0%80%20%ED%83%9C%EA%B5%AD%EC%97%90%EC%84%9C%EB%8A%94%202541%EB%85%84%EC%83%9D%3F!.md)
1. [나머지](./%EB%82%98%EB%A8%B8%EC%A7%80.md)
1. [곱셈](./%EA%B3%B1%EC%85%88.md)
1. [꼬마 정민](./%EA%BC%AC%EB%A7%88%20%EC%A0%95%EB%AF%BC.md)
1. [고양이](./%EA%B3%A0%EC%96%91%EC%9D%B4.md)
1. [개](./%EA%B0%9C.md)

## js 입력과 출력

> # readLine 모듈과 fs 모듈
>
> ## readLine 모듈
>
> ```javascript
> const readline = require("readline"); // readline 불러옴
>
> const rl = readline.createInterface({
>   input: process.stdin,
>   output: process.stdout,
> });
>
> rl.on("line", function (line) {
>   console.log(line); //입력 값을 처리할 callback 내용 기제
>
>   rl.close(); //callback 종료
> }).on("close", function () {
>   process.exit(); // 출력과 관련된 내용 기재 ≒ console.log
> });
> ```
>
> ## fs 모듈
>
> fs 모듈은 FileSystem의 약자로 파일 처리와 관련된 모듈
>
> ### readFile()
>
> ```javascript
> fs.readFile(filename, [options], callback);
>
> // filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출한다. (비동기적)
> ```
>
> ### readFileSync()
>
> ```javascript
> fs.readFileSync(filename, [options]);
>
> // filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환한다. (동기적)
> ```
>
> ## 예시
>
> ```javascript
> var fs = require("fs");
>
> // 문자 하나만 입력받을 경우
> var input = fs.readFileSync("/dev/stdin").toString();
>
> // 한칸 띄어쓰기로 구분
> // input[0], input[1] 배열에서 꺼내쓰면 된다.
> var input = fs.readFileSync("/dev/stdin").toString().split(" ");
>
> // 줄바꿈으로 구분
> var input = fs.readFileSync("/dev/stdin").toString().split("\n");
>
> // 만약 인풋값이 숫자라면
> var input = fs
>   .readFileSync("/dev/stdin")
>   .toString()
>   .split(" ")
>   .map(function (a) {
>     return +a;
>   });
> ```
