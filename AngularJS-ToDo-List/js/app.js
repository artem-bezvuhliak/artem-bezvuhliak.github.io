angular.module('ToDo',[]).
          controller('todoController',['$scope', function($scope) {

          var cachedTodos = localStorage.getItem('todos');
          if (cachedTodos) {
            $scope.todos = JSON.parse(cachedTodos);
          } else {
            $scope.todos = [
              new TodoItem('Build a to do app')
            ];
          }
          

          $scope.addTodo = function(){
            var todo = new TodoItem($scope.newTodo);
            $scope.todos.push(todo);
            $scope.newTodo = '';
          }
          $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter(function(item){
                return !item.done
            })
          }
          $scope.delete = function(id) {
            var index = -1;
            $scope.todos.forEach(function(todo, current) {
              if (todo.id === id) {
                index = current;
                return false;
              }
            });
            $scope.todos.splice(index, 1);
          }
          $scope.$watch('todos', function() {
            console.log($scope.todos);
            localStorage.setItem('todos', JSON.stringify($scope.todos));
          }, true);

        }]);