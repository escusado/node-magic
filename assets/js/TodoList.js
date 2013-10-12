Class('TodoList').inherits(Widget).includes(ModelSupport)({
    
    HTML : '<div class="todo-list"></div>',

    prototype: {
        _activate : function(){
            Widget.prototype._activate.call(this);

            //fetch json todo data
            if( typeof this.model === 'undefined' ){
                this.initModel();
            }
            
            this.refreshModel();
            
            this.updateUi();

            this.bindEvents();
        },

        updateUi : function(){
            console.log('Update ui on list');
            var todoList = this;

            //clean current childs
            this.children.forEach(function(item){
                item.destroy();
            });

            //create new ui based on model
            Object.keys(this.model).forEach(function( id ){
                
                var item,
                    value = todoList.model[id];

                item = new TodoItem({name : 'item_'+id});
                item.render( todoList.element ).updateUi(value);
                todoList.appendChild(item);

            });

        },

        bindEvents : function(){
            var todoList = this;

            this.bind('model:changed', function(){
                console.log('Changed detected!');
                todoList.updateUi();
            });

        }

    }
});