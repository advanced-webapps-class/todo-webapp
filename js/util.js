

function addTodo(event) {

  console.log('todoStringField keyup!');


  var $field = $(event.currentTarget);
  var fieldValue = $field.val();

  if (event.keyCode !== 13 || fieldValue === "") {

    console.log('event stop')
    return false;
  }


  $field.val('');

  var id = new Date().getTime();


console.log(id);

  var todo  = $.extend({}, Todo.model, {
    id: id,
    title: fieldValue
  });

  console.log('new​ todo.model:', todo);



  collection.add( todo );

  // renderTodos(todos);
  // saveData( todos );
}
