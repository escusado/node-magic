Module('ModelSupport')({
    prototype : {
        initModel : function(){
            var instance = this;

            this.model = {};
            this.refreshModel();
            console.log('Model inited: ', this.model);
        },

        new : function( recordData ){
            var instance = this;

            $.ajax({
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify(recordData),
                url: instance.config.modelUrl+'/new',
                success: function(data) {
                    console.log('Record saved!', data);
                    instance.model = data;
                    instance.dispatch('model:changed');
                }
            });

        },

        refreshModel : function(){
            var instance = this;

            $.ajax({
                method : 'get',
                url: instance.config.modelUrl+'/all',
                success: function(data) {

                    var freshModel = data,
                        changed = false;

                    if( freshModel != instance.model ){
                        changed = true;
                    }

                    instance.model = freshModel;

                    if( changed ){
                        instance.dispatch('model:changed');
                    }

                    instance.model = data;
                }
            });
        }
    }
});