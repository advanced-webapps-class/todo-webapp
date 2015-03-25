
function getDom(id) {
  return document.getElementById(id);
}

function addTodo(event) {

  console.log('todoStringField keyup!');

  //엔터키가 아니면 함수 중지
  if (event.keyCode !== 13) {
    event.stopPropagation(); //이벤트 전파중지
    return;
  }

  var newTodo = todoStringField.value;
  todoStringField.value = "";

  console.log('새로운 todo:', newTodo);

  listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});

  saveData(listDom.innerHTML);
}

function loadData() {
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}
function saveData(html) {
  console.log('saveData()');
  localStorage.setItem('todoHtml', html);
}