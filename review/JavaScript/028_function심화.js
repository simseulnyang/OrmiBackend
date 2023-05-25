function 함수2(a, b, ...c) {
    console.log(c);
    return Math.max(...c);
}

함수2('hello', 'world', 10, 20, 30, 40);

function 함수2([a, b], ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);

//
// 매개변수의 초기화
// 매개변수 초기화를 할 수 있으나 순서를 바꿔 아규먼트를 삽입하는 것은 가능하지 않다.
function 함수3(a = 10, b = 20, c = 30) {
    return a + b + c;
}

console.log(함수3((c = 1000), (a = 2000))); // 3020이 되어야 하는거 아니에요?
// 3030

//
//
//
//
// 스코프

// 1. 전역 스코프
//   - 스크립트의 어디서든 접근이 가능하기 때문에 사용이 쉽습니다.
//   - 타인과의 협업, 라이브러리 사용시 충돌의 가능성이 있습니다.
// 2. 함수 스코프
//   - 함수 내부에서 정의된 변수와 매개변수는 함수 외부에서
//     접근할 수 없습니다.
//   - 함수 내부에서 정의된 변수라면 함수의 어느 부분에서도 접근 할 수
//     있습니다.
// 3. 블록 스코프 (ES6)
//   - 중괄호 안에서만 접근 가능합니다.
//   - 블록 내부에 정의된 변수는 블록의 실행이 끝나면 해제됩니다.

let z = 100;
function sum(x) {
    // x는 매개변수(parameter)이면서 지역변수(local val)
    let y = 50; // y는 지역변수
    z = z + y;
    return x + y;
}
console.log(sum(10)); // 10은 전달인자(argument)
// console.log(x);
// console.log(y);
console.log(z); //python하고 다른점(허락하지 말았어야 하는 내용)

// 블록 레벨 스코프
if (true) {
    // for문이어도 마찬가지입니다.
    let x = 10;
    const y = 10;
}
console.log(x, y);

//

// /
{
    let a = 10;
    const b = 10;
    console.log(a);
    console.log(b);
    {
        let a = 15;
        const b = 15;
        console.log(a);
        console.log(b);
        {
            let a = 20;
            const b = 20;
            console.log(a);
            console.log(b);
        }
    }
}

// 콜백함수 (나중에 콜 할게!)
// 콜백함수란 함수에 매개변수로 전달되어 실행되는 함수
// 함수에 아규먼트로 전달

function sum(x, y) {
    return x + y;
}

function custom(x, y, func) {
    return func(x, y) + func(x + y);
}

custom(10, 20, sum);

// arr = [1, 2, 3];
// arr.sort(콜백함수);
// arr.filter(콜백함수);
// arr.map(콜백함수);

function f(x) {
    return x ** 2;
}
[1, 2, 3].map((x) => x ** 2);
// [(1, 2, 3)].map(f);
//
//
//
// 함수의 호이스팅
// 변수와 함수의 호이스팅은 내용이 많아요.
`
// python에서는 error입니다!
hello()

def hello():
    print('hello world')
`;
hello();

function hello() {
    console.log('hello world');
}

// 즉시 실행 함수
// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
})();
