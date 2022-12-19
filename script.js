let seq = 1000;
        function printReceipt() {
        seq=seq+1;
            document.getElementById("date-picker").value = seq;
            text.innerText = "Receipt generated: " + staff.value + "-" + invoice.value;
        }
// create id for staff.value + invoice.value and save to local storage
      
      
      
      
      
      // Model
      // If localstorage has a todos array, then use it
      // Otherwise use the default array.
    let todos;

      // Retrieve localStorage-1
      const savedTodos = JSON.parse(localStorage.getItem('todos'));
      // Check if it's an array
      if (Array.isArray(savedTodos)) {
        todos = savedTodos;
      } else {
        todos = [{
          }];
      } //Retrieve localStorage-2

      // Creates a todo-1
      const createTodo = (title, dueDate) => {
        const id = '' + new Date().getTime();

        todos.push({
          title: title,
          dueDate: dueDate,
          id: id
        });

        saveTodos();
      } //creates a todo-2

      // Deletes a todo-1
      const removeTodo = idToDelete => {
        todos = todos.filter(todo => {
          // If the id of this todo matches idToDelete, return false
          // For everything else, return true
          if (todo.id === idToDelete) {
            return false;
          } else {
            return true;
          }
        });

        saveTodos();
      }

      const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
      } // Deletes a todo-2

      // add todo-1
      const addTodo = () => {
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;

        createTodo(title, dueDate);
        render();
      } // add todo-2

      /* ❌ this code can now be deleted
      const deleteTodo = event => {
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;

        removeTodo(idToDelete);
        render();
      }
      */

      // This is a closure (a function that returns another
      // function. The inner has access to the outer function's
      // parameters and variables).
      const onDelete = todoToDelete => {
        return () => {
          removeTodo(todoToDelete.id);
          render();
        };
      };

      // View
      const render = () => {
        // reset our list
        document.getElementById('todo-list').innerHTML = '';

        todos.forEach(todo => {
          const element = document.createElement('div');
          element.innerText = todo.title + ' ' + todo.dueDate;

                /*const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.style = 'margin-left: 12px';
        
        // Closures let you create functions and give them access to
        // variables they normally wouldn't have access to.
                deleteButton.onclick = onDelete(todo);
                element.appendChild(deleteButton); */

          const todoList = document.getElementById('todo-list');
          todoList.appendChild(element);
        });
      }

      render();