document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

   
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            
            addTaskFromStorage(taskText);
        });
    }

    
    function addTaskFromStorage(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const newTasks = storedTasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

   
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

       
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const newTasks = storedTasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

       
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));

       
        taskInput.value = '';
    }

   
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter') addTask();
    });

    loadTasks();
});
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

   
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            
            addTaskFromStorage(taskText);
        });
    }

  
    function addTaskFromStorage(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const newTasks = storedTasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const newTasks = storedTasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        e
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));

        taskInput.value = '';
    }

   
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter') addTask();
    });

    loadTasks();
});
