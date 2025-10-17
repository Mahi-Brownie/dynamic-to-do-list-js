// script.js
document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  // In-memory tasks array (keeps current state in runtime)
  let tasks = [];

  // Create a task <li> element and attach remove handler
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';

    // When clicked, remove from DOM and update storage
    removeBtn.addEventListener('click', () => {
      removeTask(taskText, li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    return li;
  }

  // Add task (save=true will persist to localStorage; set false when loading to avoid duplicates)
  function addTask(taskText, save = true) {
    const trimmed = String(taskText).trim();
    if (!trimmed) return; // ignore empty

    // create DOM
    const taskEl = createTaskElement(trimmed);
    taskList.appendChild(taskEl);

    if (save) {
      // load current stored tasks, append, and save
      const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
      stored.push(trimmed);
      localStorage.setItem('tasks', JSON.stringify(stored));

      // keep in-memory tasks in sync
      tasks = stored;
    }
  }

  // Remove task from DOM and Local Storage
  function removeTask(taskText, liElement) {
    // Remove from DOM
    if (liElement && liElement.parentNode) {
      liElement.parentNode.removeChild(liElement);
    }

    // Remove from in-memory array (first occurrence)
    const idx = tasks.indexOf(taskText);
    if (idx > -1) {
      tasks.splice(idx, 1);
    } else {
      // fallback: load from storage and try remove there
      const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
      const i2 = stored.indexOf(taskText);
      if (i2 > -1) {
        stored.splice(i2, 1);
        localStorage.setItem('tasks', JSON.stringify(stored));
        tasks = stored;
        return;
      }
    }

    // Save updated list back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Load tasks from localStorage on startup
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = storedTasks.slice(); // copy into in-memory array
    storedTasks.forEach(taskText => {
      // addTask with save = false to avoid writing back during load
      addTask(taskText, false);
    });
  }

  // Hook up UI actions
  addBtn.addEventListener('click', () => {
    const text = taskInput.value;
    addTask(text, true);
    taskInput.value = '';
    taskInput.focus();
  });

  // Allow Enter key to add task
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

  // Initialize
  loadTasks();
});
git add .