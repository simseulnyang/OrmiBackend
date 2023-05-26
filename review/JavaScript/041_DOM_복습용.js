// 해당하는 Id를 가진 요소에 접근하기
// 트리탐색기능
// 부하가 발생함
// 최적화 해주는 것이 좋음
document.getElementById();

// css 선택자로 단일 요소에 접근하기
document.querySelector('selector');

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
});

document.createElement(target);

element.appendChild(target);

element.append(target); // target 요소를 element의 자식으로 위치합니다. ppendChild 와 다른점은 노드 뿐만 아니라 여러개의 노드를 한번에, 그리고 텍스트도 자식 노드로 포함시킬 수 있다는것 입니다.

const body = document.querySelector('body');
const myimg = document.createElement('img');
// const idAttr = target.getAttribute('id');
myimg.setAttribute(
    'src',
    'https://img.wendybook.com/image_detail/img159/159599_01.jpg'
);
body.append(myimg);
