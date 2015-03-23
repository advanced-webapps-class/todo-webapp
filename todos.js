//start...

//개발자도구에서 메세지확인
console.log('todos.js');

function getDom(id){
  return document.getElementById(id);
}

// id가 todoString 인 element 가져오기
var todoStringField = getDom('todoString');

console.log( todoStringField);