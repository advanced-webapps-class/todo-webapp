var $listDom = $('#todoList');
var todoTemplateHtml = $('#todoTemplate').html();


var view ={

  render: function(){
    $listDom.html(tmpl( todoTemplateHtml, {todos: todos} ));
  }

};

$(document.body).on('addCollection', view.render);
$(document.body).on('removeCollection', view.render);
