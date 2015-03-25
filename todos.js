//start...

//개발자도구에서 메세지확인
console.log('todos.js');



// id가 todoString 인 element 가져오기
var todoStringField = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;

console.log(todoStringField);


todoStringField.addEventListener('keyup', addTodo);

