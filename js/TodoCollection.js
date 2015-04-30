var todos = [ ];


var collection = {


  add: function(todo) {

    todos.push(todo);

    $(document.body).trigger( "addCollection");

  },
  remove: function(id){

    for(var i=0; i <todos.length; i++){

      if(todos[i].id === id){
        console.log('find', i)
        //todos에서  todo를 지워야해
        todos.splice(i, 1);
        break;
      }

    }//end for

    $(document.body).trigger( "removeCollection");

  }

}
