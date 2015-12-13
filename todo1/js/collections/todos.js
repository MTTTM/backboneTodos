/**
 * Created by Administrator on 2015/12/12.
 */
var app=app||{};
var TodoList=Backbone.Collection.extend({
    model:app.Todo,
    localStorage: new Store('person-data'),
    completed:function(){
        //return this.filter(function(todo){
        //    return todo.get("completed")
        //})
        return this.where({completed:true})
    },
    remaining:function(){
      //return this.without.apply(this,this.completed());
        return this.where({completed:false})
    },
    nextOrder:function(){
        if(!this.length){
            return 1;
        }
        return this.last().get("order")+1;
    },
    comparator:function(todo){
        return todo.get("order");
    }
});
app.Todos=new TodoList();