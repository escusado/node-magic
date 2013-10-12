Class('TodoApp').inherits(Widget)({
    
    HTML : '<div class="app-wrapper"></div>',

    prototype: {
        init: function() {
          
          Widget.prototype.init.call(this);

          this.todoList = new TodoList({config:{ modelUrl : '/todoItems' }}).render(this.element).activate();
          // this.todoList;
          this.addItemForm = new TodoAddItemForm().render(this.element).activate();
          
          this.bindEvents();

          // this.

          return this;
        },

        bindEvents : function(){
          var todoApp = this;
          
          this.addItemForm.bind('item:new', function(ev){
              todoApp.todoList.new( {data: ev.data} );
          });

        }
    }
});