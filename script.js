document.addEventListener('DOMContentLoaded', () => {
    // Initialize both to-do lists
    initTodoList('taskInput1', 'addTaskButton1', 'taskList1');
    initTodoList('taskInput2', 'addTaskButton2', 'taskList2');

    function initTodoList(inputId, buttonId, listId) {
        const taskInput = document.getElementById(inputId);
        const addTaskButton = document.getElementById(buttonId);
        const taskList = document.getElementById(listId);

        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskList, taskText);
                taskInput.value = '';
                taskInput.focus();
            }
        });

        taskList.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const button = e.target;
                const li = button.parentElement;
                taskList.removeChild(li);
            } else if (e.target.tagName === 'LI') {
                e.target.classList.toggle('completed');
            }
        });
    }

    function addTask(taskList, taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
});
