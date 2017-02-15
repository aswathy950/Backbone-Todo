var todo = new TodoModel({
  'title':'aswathy',

});

var todocollection = new TodoCollection ([
  {'title':'hai'},
  {'title': 'hello'},
  {'title':'world'}

]);

todocollection.add(todo);
var view1 = new TodoList({collection: todocollection});
view1.render();

$(' #submit ').click(function(){
  if ( ! $('.title').val().trim() ) {
     return;

   }
  var title=  $('.title').val().trim();
 $('.title').val('').focus();
  var todo = new TodoModel({
    'title':title,
  })
  todocollection.add(todo);
  console.log("hello");
});
