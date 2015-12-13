/**
 * Created by Administrator on 2015/12/12.
 */
var Workspace=Backbone.Router.extend({
   routers:{
       '*filter':'setFilter'
   } ,
    setFilter:function(param){
        window.app.Todos.trigger("filter")
    }
});
app.TodoRouter=new Workspace();
Backbone.history.start();