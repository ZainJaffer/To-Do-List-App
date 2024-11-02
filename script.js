console.log("Script loaded!");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    // Step 1: Get the value from the input field
    const taskText = taskInput.value.trim();

    // Step 2: Check if the input is empty
    if (taskText === "") {
        return; // Stop if the input is empty
    }

    // Step 3: Create a new <li> element
    const listItem = document.createElement("li");

    // Step 4: Create a <span> to hold the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Step 5: Add an event listener to mark the task as complete when the text is clicked
    taskSpan.addEventListener("click", () => {
        console.log("Task text clicked!"); // Check if this line logs when clicked
        taskSpan.classList.toggle("completed");
    });

    // Step 6: Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Step 7: Add an event listener to delete the task when clicked
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    // Step 8: Add the task text and delete button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Step 9: Append the list item to the task list
    taskList.appendChild(listItem);

    // Step 10: Clear the input field after adding the task
    taskInput.value = "";
}

