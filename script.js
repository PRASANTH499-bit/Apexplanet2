// Step 2: JavaScript Form Validation
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    formMsg.textContent = "All fields are required!";
    formMsg.style.color = "red";
  } else if (!email.match(emailPattern)) {
    formMsg.textContent = "Enter a valid email!";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Form submitted successfully!";
    formMsg.style.color = "green";
    form.reset();
  }
});

// Step 4: Dynamic To-Do List
const addTaskBtn = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});