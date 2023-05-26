// API는 Application Programming Interface
// 직접 필요로하는 소스를 만지지 않고 컨트롤 할 수 있음
// 쉽게 말해 '주문서'라고 생각하면 됨

// DOM API
// HTML 문서의 내용을 트리형태로 구조화하여
// 웹페이지와 프로그래밍 언어를 연결시켜주는 역할
// 각각의 요소와 속성, 콘텐츠를 표현하는 단위를 '노드(node)'라고 합니다.

document.head;
document.body;
document.body.childNodes;
document.body.childNodes[1];
document.body.childNodes[1].tagName;
document.body.childNodes[1].innerText;
document.body.childNodes[1].document.body.childNodes[2]; //점만 찍어서 얼마나 많은 애트리뷰트가 있는지 확인해보세요.
document.body.childNodes[2].data;

// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector('selector');

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll('selector');

// 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지합니다.
// listener 함수의 인수에는 이벤트에 대한 정보가 담겨있습니다.

const myBtn = document.querySelector('button');

myBtn.addEventListener('click', function () {
    console.log('hello world');
});

const myBtn1 = document.querySelector('button');

myBtn1.addEventListener('click', function () {
    // blue 라는 클래스의 속성 값을 지정 할 수 있습니다.
    myBtn1.classList.add('blue');

    // myBtn.classList.remove("blue");     클래스를 제거합니다.
    // myBtn.classList.toggle("blue");     클래스를 토글합니다. 없으면 넣어주고, 있으면 제거합니다.
    // myBtn.classList.contains("blue");   해당하는 클래스가 있는지 확인합니다.
});

const btnRed = document.querySelector('button');
const title = document.querySelector('#one');
btnRed.addEventListener('click', () => {
    title.classList.toggle('red');
});

const sectionTitle = document.createElement('h2');
sectionTitle.innerText = 'hello';

document.querySelector('body').appendChild(sectionTitle);
//
//
//

const body = document.querySelector('body');
const myUl = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    const myLi = document.createElement('li');
    myLi.innerText = 'hello';
    myUl.appendChild(myLi);
}

body.appendChild(myUl);

// 실습은 안했습니다.
// 주의할 점은 JS에서 style 컨트롤 하는 것은 카멜표기법입니다.
// bakcground-color => bacgroundColor
const target = document.querySelector('p');
const txtColor = target.style.color; // 현재 스타일 정보를 가져옵니다.
target.style.color = 'red'; // 현재 스타일 정보를 변경합니다.
target.style.fontWeight = 'bold'; // 현재 스타일 정보에 font-weight 속성이 없다면 추가합니다.
target.style.color = null; // 현재 스타일 정보를 제거(초기화)합니다.

//
//
//

const body = document.querySelector('body');
const myimg = document.createElement('img');
// const idAttr = target.getAttribute('id');
myimg.setAttribute(
    'src',
    'https://img.wendybook.com/image_detail/img159/159599_01.jpg'
);
body.append(myimg);
//
//
//

const btn = document.createElement('button');
btn.innerText = '눌럿!';
const body = document.querySelector('body');
body.append(btn);

btn.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
}); // 일반 function과 다르다는 것만 인지하시길 부탁드립니다.

btn.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
});

// 실습은 하지 않습니다.
// <!-- 앵커의 기본 동작을 중지 -->
// <a href="https://www.naver.com" class="link">네이버 링크입니다만..</a>
// <script>
//     const link = document.querySelector('.link');
//     link.addEventListener('click', (event) => {
//         console.log('clicked');
//         event.preventDefault();
//     })
// </script>

// <!-- submit 의 기본 동작을 중지 -->
// <form action="">
//     <button type="submit" class="submit">제출</button>
// </form>
// <script>
//     const submit = document.querySelector('.submit');
//     submit.addEventListener('click', (event) => {
//         console.log('clicked');
//         event.preventDefault();
//     })
// </script>
