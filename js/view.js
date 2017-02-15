var TodoView = Backbone.View.extend( {
tagName: "li",
events : {
  "change input" : "toggle"
},
initialize: function(){
  this.listenTo(this.model, "change" ,this.render);
},

render : function(){
  if(this.model.get('done')){
this.$el.html('<input type=\"checkbox"\ checked="checked" name="name"><del>' +this.model.get('title')+'</del>');
}
else {
  this.$el.html('<input type=\"checkbox"\ name="name"><span>' +this.model.get('title')+'</span>');
}
return this;
},

toggle: function () {
  this.model.set('done',!(this.model.get('done')));
}
});

var TodoList = Backbone.View.extend ({
  tagName: "ul",

  initialize: function(){
    this.listenTo(this.collection, "add" ,this.render);
  },
  render : function(){
    var html=[];
    var eachLi;
  this.collection.each( function(todo) {
    eachLi = new TodoView({model : todo});
    html.push(eachLi.render().el);

    });
    var listView = this.$el.html( html );
   $('#app').append(listView);
    console.log("hai");
  }
});
