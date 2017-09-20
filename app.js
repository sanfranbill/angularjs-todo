 angular
   .module('todo', [])
   .controller('TodoController', TodoController);
 
 function TodoController() {
     this.tasks = ['Walk the cat', 'Eat second breakfast', 'Watch Rocky'];
     
     this.createTask = () => {
         this.tasks.push(this.taskName);
         this.taskName = '';
     };
     
     this.deleteTask = (index) => {
         this.tasks.splice(index, 1);
     };
 }