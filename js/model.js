var TodoModel= Backbone.Model.extend( {
  defaults: {
    'title': 'none',
    'done': false
  }
});

var TodoCollection = Backbone.Collection.extend({
  'Model': TodoModel,

});
