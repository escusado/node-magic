Class('TodoItem').inherits(Widget)({
    HTML: '<div class="item">\
        <div class="label">placeholder</div>\
        <div class="delete"><a href="javascript:void(0);">[X]</a></div>\
      </div>',

    prototype: {
        updateUi : function( label ){
            console.log('>>>>', label);
            this.element.find('.label').html( label );
        }
    }
});