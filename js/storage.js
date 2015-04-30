
var storage = {

  load: function(){
    console.log('storage.load()');
    return JSON.parse( localStorage.getItem('todos') || "[]");
  },
  save: function(){
    console.log('storage.save()');
    localStorage.setItem('todos', JSON.stringify(todos) );

  }
}

$(document.body).on('addCollection', storage.save);
$(document.body).on('removeCollection', storage.save);
