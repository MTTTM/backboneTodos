/**
 * Created by Administrator on 2015/12/12.
 */
var app=app||{};
app.Todo=Backbone.Model.extend({
   defaults:{
       title:"",
       completed:false
   },
    toggle:function(){
        this.save({
            completed:!this.get("completed")
        })
    }
    ,parse: function(response) {  /*如果不写这里就死循环,影响save  bb代码：var serverAttrs = model.parse(resp, options);*/
        if (response.attributes) return response.attributes;
        return response;
    }
});