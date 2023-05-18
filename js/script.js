const todoList = document.querySelector('ul');
const taskForm = document.querySelector('form');
const taskInput = document.getElementById('task');
const addButton = document.querySelector('button');

addButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  const addedTask = taskInput.value;
  taskInput.value = '';

  const description = document.createElement('li');
  description.innerHTML = `
    <span>${addedTask}</span>
    <label>Enter specifics: <input type="text"></label>
    <button>Delete</button>
  `;

  todoList.appendChild(description);
});

todoList.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    const listItem = target.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
});
