var start  = document.getElementById('start');
var reset  = document.getElementById('reset');
var stop  = document.getElementById('stop');


var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var startTimer; 

start.addEventListener('click', function() {
    if(startTimer === undefined) {
        startTimer = setInterval(Timer, 1000);
    } else {
        alert("Timer is already running!");
    }
})

reset.addEventListener('click', function() {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00"; 

    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
})

stop.addEventListener('click', function() {
    stopInterval();
    startTimer = undefined;
})

function Timer() {
    if(ws.innerText != 0) {
        ws.innerText--;
    }
    else if(wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }
    if(wm.innerText == 0 && ws.innerText == 0) {
        if(bs.innerText != 0) {
            bs.innerText--;
        }
    }
    else if(bm.innerText != 0 && bs.innerText == 0) {
        bs.innerText = 59;
        bm.innerText--;
    }
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25; 
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }

}

function stopInterval() { 
    clearInterval(startTimer);
}

const tasksInput = document.getElementById('tasks-input');
const tasksList = document.getElementById('tasks-list');
const tasksForm = document.getElementById('tasks-form');

tasksForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    if (tasksInput.value.trim() !== '') {
        const newTask = createTaskElement(tasksInput.value.trim());
        tasksList.appendChild(newTask);
        tasksInput.value = ''; // Clear the input field
    }
});

function createTaskElement(taskText) {
    const taskLi = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    const taskLabel = document.createElement('label');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    taskCheckbox.type = 'checkbox';
    taskLabel.textContent = taskText;
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';

    taskCheckbox.addEventListener('click', function() {
        taskLabel.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    editButton.addEventListener('click', function() {
        const newTaskText = prompt('Edit task:', taskLabel.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskLabel.textContent = newTaskText.trim();
        }
    });

    deleteButton.addEventListener('click', function() {
        taskLi.remove();
    });

    taskLi.appendChild(taskCheckbox);
    taskLi.appendChild(taskLabel);
    taskLi.appendChild(editButton);
    taskLi.appendChild(deleteButton);

    return taskLi;
}