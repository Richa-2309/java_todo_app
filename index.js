```javascript
// ==========================================================
// TODO APPLICATION - JAVASCRIPT
// ==========================================================

// Backend API URL
const API_URL = "http://localhost:8080/todos";


// ==========================================================
// LOAD ALL TODOS
// ==========================================================

/*
 * This function gets all Todo items from the backend
 * and displays them on the webpage.
 */
async function loadTodos() {

    try {

        // Send GET request to Spring Boot backend
        const response = await fetch(API_URL);

        // Check if the server returned a successful response
        if (!response.ok) {
            throw new Error("Failed to fetch todos");
        }

        // Convert the response into JavaScript object/array
        const todos = await response.json();

        // Display all todos on the webpage
        displayTodos(todos);

    } catch (error) {

        // Print error in browser console
        console.error("Error loading todos:", error);

        // Show error message to the user
        alert("Unable to load todos");
    }
}


// ==========================================================
// DISPLAY TODOS
// ==========================================================

/*
 * This function displays all Todo items inside
 * the HTML element with id="todoList".
 */
function displayTodos(todos) {

    // Get the Todo list container from HTML
    const todoList = document.getElementById("todoList");

    // Remove existing Todo items before displaying new ones
    todoList.innerHTML = "";


    // Loop through every Todo
    todos.forEach(function(todo) {

        // Create a new div for each Todo
        const todoItem = document.createElement("div");

        // Add CSS class to the Todo item
        todoItem.classList.add("todo-item");


        // Create the HTML content for the Todo
        todoItem.innerHTML = `
            <h3>${todo.title}</h3>

            <p>${todo.description || ""}</p>

            <p>
                Status:
                <strong>
                    ${todo.completed ? "Completed" : "Pending"}
                </strong>
            </p>

            <button onclick="toggleTodo(${todo.id}, ${todo.completed})">
                ${todo.completed ? "Mark Pending" : "Complete"}
            </button>

            <button onclick="deleteTodo(${todo.id})">
                Delete
            </button>

            <hr>
        `;


        // Add the Todo item to the webpage
        todoList.appendChild(todoItem);
    });
}


// ==========================================================
// ADD TODO
// ==========================================================

/*
 * This function creates a new Todo.
 *
 * It gets the title and description from the HTML form
 * and sends them to the Spring Boot backend.
 */
async function addTodo() {

    // Get the title entered by the user
    const title = document.getElementById("title").value;

    // Get the description entered by the user
    const description =
        document.getElementById("description").value;


    // Check whether the title is empty
    if (title.trim() === "") {

        // Show validation message
        alert("Please enter a Todo title");

        // Stop the function
        return;
    }


    // Create a Todo object
    const todo = {

        title: title,

        description: description,

        // New Todo is incomplete by default
        completed: false
    };


    try {

        // Send POST request to create a new Todo
        const response = await fetch(API_URL, {

            // HTTP method
            method: "POST",

            // Tell backend that we are sending JSON
            headers: {
                "Content-Type": "application/json"
            },

            // Convert JavaScript object into JSON
            body: JSON.stringify(todo)
        });


        // Check whether Todo was successfully created
        if (!response.ok) {
            throw new Error("Failed to add todo");
        }


        // Clear the title input
        document.getElementById("title").value = "";

        // Clear the description input
        document.getElementById("description").value = "";


        // Load the updated Todo list
        loadTodos();

    } catch (error) {

        // Print error in console
        console.error("Error adding todo:", error);

        // Show error message
        alert("Unable to add todo");
    }
}


// ==========================================================
// UPDATE TODO STATUS
// ==========================================================

/*
 * This function changes the Todo status.
 *
 * If the Todo is completed:
 *      true -> false
 *
 * If the Todo is pending:
 *      false -> true
 */
async function toggleTodo(id, currentStatus) {

    // Create updated Todo object
    const updatedTodo = {

        // Reverse the current status
        completed: !currentStatus
    };


    try {

        // Send PUT request to update the Todo
        const response = await fetch(`${API_URL}/${id}`, {

            // HTTP method used for updating data
            method: "PUT",

            // Tell backend that we are sending JSON
```
