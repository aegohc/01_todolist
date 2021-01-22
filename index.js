// html에서 input tag를 선택하기
// <input type="text" id="todoInput"> addEventListener()
let todoInput = document.getElementById('todoInput');
let todoInputValue ;

function todoAddEventHandler() {
   // 입력 값 저장
   todoInputValue = todoInput.value; // '할일'
  todoInput.value = ""; // todoinput = {value : '할일'} => todoinput = {value : ''}
   
   // 할일 하나의 태그로 만들기
  let todoDiv = document.createElement('div');
  todoDiv.className = 'singleTodo'
  let todoInputValueNode = document.createTextNode(todoInputValue);

  // <div>할일1</div>
  todoDiv.appendChild(todoInputValueNode);
  
  // x 버튼 넣기
  let deleteBtn = document.createElement('button');
  let deleteBtnNode = document.createTextNode('Delete');
  todoDiv.appendChild(deleteBtn);
  deleteBtn.appendChild(deleteBtnNode);

  //  <div id="todoList"> 태그 선택하기 할일 한개 태그 추가 appendhild
  document.getElementById('todoList').appendChild(todoDiv);
}

todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    todoAddEventHandler();
  }
});

// html에서 내가 원하는 추가 버튼 태그를 선택해라
// 그 버튼에서 클릭 이벤트가 발생하면 ~~해라
var bringAddBtn = document.getElementById('addBtn');
bringAddBtn.addEventListener('click', todoAddEventHandler);
