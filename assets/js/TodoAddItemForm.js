Class('TodoAddItemForm').inherits(Widget)({
    HTML : '<div class="add-item-form">\
          <input type="text"/>\
          <a class="add-task" href="javascript:void(0);">add</a>\
        </div>',
        
    prototype: {
        _activate : function(){
            Widget.prototype._activate.call(this);
            
            this.inputElement = this.element.find('input');
            this.addElement = this.element.find('.add-task');

            this.bindEvents();
        },

        bindEvents : function(){
            var todoAddItemForm = this;

            this.addElement.click(function(){
                todoAddItemForm.reportNewItem();
                todoAddItemForm.resetInput();
            });
        },

        resetInput : function(){
            this.inputElement.val('');
        },

        reportNewItem : function(){
            this.dispatch('item:new',{data:this.inputElement.val()});
        }

    }
});