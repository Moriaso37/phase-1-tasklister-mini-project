document.addEventListener('DOMContentLoaded', () => {
  // Select the form, input field, and task list
  const form = document.querySelector('#create-task-form');
  const taskInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  // Add an event listener for the form's submit event
  form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the value from the input field
    const taskDescription = taskInput.value;

    // Create a new list item and set its text content
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // Append the new task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskInput.value = '';
  });
});