// 1번 문제
// 1부터 100까지 더하는 예제
// for(초깃값; 조건; 증감값)
// 1번 풀이
let s = 0;
for (let i = 0; i < 101; ++i) {
    s += i;
}
s;

// 2번 풀이
let s1 = 0;
let i = 1;
while (i < 101) {
    s1 += i;
    ++i;
}
s;

new Array(10);
new Array(10).fill(1);
new Array(10).fill(1);
new Array(10).fill(1).map((_, i) => i);
new Array(10).fill(1).map((_, i) => i + 1);

// 저는 javascript도 python처럼 쓰기 위해서
// range도 구현하고, zip도 구현하고, map도 구현해놓고 사용합니다.
// 위처럼 개발하시는 것을 권하지는 않습니다.
// 개인 개발속도는 빨라지지만 협업할 때 문제가 생깁니다.
// 회사 컨벤션으로 맞춰놓으면 개발속도 높아집니다.

// 3번풀이
let range = new Array(100).fill(1).map((_, i) => i + 1);
let s2 = 0;
for (const i of range) {
    //   console.log(i);
    s2 += i;
}
s2;

// 4번풀이
new Array(100)
    .fill(1)
    .map((_, i) => i + 1)
    .reduce((a, c) => a + c);

// 5번 풀이
let range1 = new Array(100).fill(1);
let s3 = 0;
for (const index in range) {
    // index가 문자열이라서 변환해준겁니다.
    //   s += parseInt(index) + 1
    s3 += +index + 1;
}
s3;

// 2번 문제
// 1부터 100까지 짝수만 더하는 예제
// 100번 반복
let s4 = 0;
for (let i = 0; i < 101; ++i) {
    if (i % 2 == 0) {
        s4 += i;
    }
}
s4;

// 위보다는 효율적인 코드
// 50번 반복
let s5 = 0;
for (let i = 0; i < 101; i += 2) {
    s5 += i;
}
s5;

let s6 = 0;
let i2 = 0;
while (i2 < 101) {
    if (i2 % 2 === 0) {
        s6 += i2;
    }
    ++i;
}
s6;

// 3번 문제
// [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만(미만인 수) 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

// forof 문
let s7 = 0;
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1];
for (const i of data) {
    if (i < 5) {
        s7 += i;
    }
}
s7;

//while문
let data1 = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1];
let s8 = 0;
let i1 = 0;
while (i1 < data.length) {
    if (data[i1] < 5) {
        s8 += data[i1];
    }
    i1++;
}
s8;

//filter문
data.filter((v) => v < 5).reduce((a, c) => a + c, 0);

// map문 (쉬운방법)
data.map((v) => {
    if (v < 5) {
        return v;
    }
    return 0;
}).reduce((a, c) => a + c, 0);

// map문 (3항연산자 사용)
data.map((v) => v < 5);
data.map((v) => (v < 5 ? v : 0));
data.map((v) => (v < 5 ? v : 0)).reduce((a, c) => a + c, 0);

// reduce만 써서 풀기 (매우 어려운 방법)
data.reduce((a, c) => (c < 5 ? a + c : a), 0);

//forEach
let s9 = 0;
data.forEach((v) => v < 5 && (s9 += v));

// 4번 문제
// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']에서 모든 숫자를 다 더해주세요.
// 1. 숫자만 더합니다.
// 2. 문자열도 숫자로 변환하여 더합니다.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

let data3 = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1'];
let s12 = 0;
for (const i of data3) {
    if (typeof i === 'number') {
        s12 += i;
    }
}
s12;

function typeCheck(value) {
    return Object.prototype.toString.call(value);
}

function typeCheck(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

let data2 = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1'];
// 모두 숫자로 변환하여 더하라고 생각함.
data2.reduce((a, c) => a + parseInt(c), 0);

// typecheck를 사용하여 숫자만 더하기

function typeCheck(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

let s10 = 0;
for (const i of data2) {
    if (typeCheck(i) === 'Number') {
        s10 += i;
    }
}
s10;

// while문
let s11 = 0;
let i3 = 0;
while (i3 < data2.length) {
    if (typeof data2[i3] === 'number') {
        s11 += data2[i3];
    }
    i3++;
}
s11;

//filter문
data2.filter((v) => typeof v === 'number').reduce((a, c) => a + c, 0);

// 난이도가 있음. (reduce만 사용)
// number인 것만 더하는 것
data2.reduce((a, c) => (typeof c === 'number' ? a + c : a), 0);
// number와 string 모두 더하는 것이었다면?
data2.reduce((a, c) => a + parseInt(c), 0);
// 엔터를 이렇게 칠 수 있기 때문에 가독성 차원에서 이점을 볼 수 있습니다.
// data
//     .map(v => parseInt(v))
//     .reduce((a, c) => a + c, 0)

// data.reduce((a, c) => (c === parseFloat(c) ? a + c : a), 0);
//
//
//
//
// 5번 문제
// 모음 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120849
//('hello world');//다른표현
new Array('hello world'); // ['hello world']

'hello world'.split('');
Array.from('hello world'); //iterable한 객체를 한조각씩 나누어 배열로 표현해줌

// v in 'aeiou' 이렇게 쓰고 싶을 때에는!
// includes

Array.from('hello world').filter((v) => !['a', 'e', 'i', 'o', 'u'].includes(v));

Array.from('hello world')
    .filter((v) => !['a', 'e', 'i', 'o', 'u'].includes(v))
    .join('');

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
    result = '';
    for (const s of my_string) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s)) {
            continue;
        }
        result += s;
    }
    return result;
}

solution('hello');
//

//
// 6번문제
// 용돈은 매년 2배씩 오릅니다.
// 올해 받은 용돈은 10000원입니다.
// 나이는 8살입니다.
// 30만원 이상이 되면 용돈이 더이상 오르지 않습니다.
// for 와 continue 문법을 써서 8살부터 35살까지 받은 용돈의 총합을 구하세요.

result = 0;
money = 10000;
for (let age = 8; age < 36; age++) {
    result += money;
    if (money >= 300000) {
        continue;
    }
    money = money * 2;
}
result;
//
//
//
// 7번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120850
// isNaN을 사용하면 숫자는 false가 나옵니다.
// 문자는 true가 나옵니다.

function solution(my_string) {
    my_string
        .split('')
        .filter((v) => !isNaN(v))
        .map((v) => v * 1)
        .sort((a, b) => a - b);
}
