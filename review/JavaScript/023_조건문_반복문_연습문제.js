// 중급자 분들은 보세요.
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
const map = (func, iter) => {
    result = [];
    for (const i of iter) {
        result.push(func(i));
    }
    return result;
};

// 8번문제
// https://codingdojang.com/scode/393?answer_mode=hide
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// str(list(range(10001))).count('8')
// 이 코드는 알고리즘 문제 풀이할 때만 쓰세요.
'.'.repeat(100);
'.'.repeat(100).split('.'); // 101개 생성
'.'
    .repeat(100)
    .split('.')
    .map((v, i) => i + 1);
'.'
    .repeat(100)
    .split('.')
    .map((v, i) => i + 1)
    .join('');
'.'
    .repeat(100)
    .split('.')
    .map((v, i) => i + 1)
    .join('')
    .split('')
    .filter((v) => v === '8').length;

// for문으로
let s = '';
for (let i = 0; i < 101; i++) {
    s += i;
}
s.split('').filter((v) => v === '8').length;

// Array 사용
Array(100)
    .fill(0)
    .map((v, i) => '' + i);

Array(101)
    .fill(0)
    .map((v, i) => '' + i) // 안에서 메서드 체이닝을 한 번 더 할 수 있지만 복잡도만 상승할 것 같아 실행하지 않았습니다.
    .join('')
    .split('')
    .filter((v) => v === '8').length;

// 9번문제
let a = [10, 20, 30, 40];
let b = [100, 200, 300, 400];
a.map((v, i) => [v, b[i]]);

let a1 = [10, 20, 30, 40];
let b1 = [100, 200, 300, 400];
let c = [1000, 2000, 3000, 4000];
a.map((v, i) => [v, b1[i], c[i]]);

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

let s1 = [1, 3, 4, 8, 13, 17, 20];

//[(1, 3, 4, 8, 13, 17, 20)]
//[(3, 4, 8, 13, 17, 20)];

// Python에서 sort를 했을 대 주었던 key function을 여기서 구현해볼겁니다.

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

let s1 = [1, 3, 4, 8, 13, 17, 20];

zip(s, s.slice(1));
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];

//for문
let s1 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s1.length; i++) {
    console.log(s1[i]);
}

let s1 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s1.length - 1; i++) {
    console.log(s1[i + 1] - s1[i]);
} // 일반적인 코드 방식

let s1 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < s1.length; i++) {
    console.log(s1[i] - s1[i - 1]);
} // 초급자에게 가독성 좋은 코드

// 최솟값을 찾아내려면 먼저 최댓값을 저장해라!
// 최댓값을 찾아내려면 먼저 최솟값을 저장해라!
let s1 = [1, 3, 4, 8, 13, 17, 20];
let min = Infinity;
// let max = -Infinity
for (let i = 0; i < s1.length - 1; i++) {
    if (s1[i + 1] - s1[i] < min) {
        min = s1[i + 1] - s1[i];
        index = i;
    }
}
console.log(s1[index], s1[index + 1]);

// 10번문제
// 엘리베이터 최대 몸무게 500kg입니다.
// 다음 친구들이 엘리베이터를 탔을 때 최대로 탑승할 수 있는 인원수를 구하세요.
let weight = [60, 50, 55, 60, 77, 88, 56, 67, 89, 45, 55, 44];
let weight_s = weight.sort((a, b) => a - b);
let maxSum = 0;
let count = 0;
for (const i of weight_s) {
    maxSum += i;
    if (maxSum > 500) {
        break;
    }
    count += 1;
}
console.log(count);
