async function fetchTodoList() {
    try {
        const response = await fetch("https://dummyjson.com/todos?limit=5");
        const data = await response.json();
        return data.todos;
    } catch (error) {
        console.log(error.message);
    }
}

let displayTodoList = async function () {
    let todosContainer = document.getElementById("todo-container");
    let todoData = await fetchTodoList();
    todosContainer.innerHTML = todoData.map(todo => {
        return `
        <div class="todo-card">
            <h5>${todo.todo}</h5>
            <p class="status ${todo.completed ? 'completed' : 'incomplete'}">
    Status: ${todo.completed ? 'Completed' : 'Not Completed'}
</p>
        </div>`;
    }).join('');
}

displayTodoList();
