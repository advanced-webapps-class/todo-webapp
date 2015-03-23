//start...

//개발자도구에서 메세지확인
console.log('todos.js');

function getDom(id){
  return document.getElementById(id);
}

// id가 todoString 인 element 가져오기
var todoStringField = getDom('todoString');

console.log( todoStringField);

todoStringField.addEventListener('keyup', function (event) {

  console.log('todoStringField keyup!');

  //엔터키를 입력하면
  if(event.keyCode === 13){
    console.log(todoStringField.value);

    var newTodo = todoStringField.value;
    todoStringField.value = "";

    console.log('새로운 todo:', newTodo);

  }


});