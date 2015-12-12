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
});