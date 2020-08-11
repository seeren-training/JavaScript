
let displayType = "week";

const taskList = [];

const createTask = (taskName, taskDescription, taskRepeat, taskStart, taskEnd, taskAlarm, taskColor) => {
    const task = {
        name: taskName,
        description: taskDescription,
        repeat: taskRepeat,
        start: taskStart,
        end: taskEnd,
        alarm: taskAlarm,
        color: taskColor
    };
    return task;
}

const displayTask = (task) => {
    document.querySelector(".brand-logo").innerHTML = task.name;
    document.querySelector("main").innerHTML = `
    <br/>
    <br/>
    <div class="row">
        <div class="col s12 m6 offset-m3">
            <div class="card ${task.color} lighten-1">
                <div class="card-content white-text">
                <span class="card-title">Description</span>
                <p>${task.description}</p>
                </div>
            </div>
            <div class="card red ${task.color} lighten-1">
                <div class="card-content white-text">
                <span class="card-title">Duration</span>
                <p>From ${task.start} to ${task.end}</p>
                </div>
            </div>
            <br/>
            <label>
                <input type="checkbox" disabled class="filled-in" ${task.repeat ? "checked" : ""} />
                <span>Repeat</span>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="checkbox" disabled class="filled-in" ${task.alarm ? "checked" : ""} />
                <span>Alarm</span>
            </label>
        </div>
    </div>`;
    document.querySelector(".taskboard-footer").innerHTML = `
    <a class="fixed bottom-left btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">keyboard_backspace</i>
    </a>
    <a class="fixed bottom-right btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">clear</i>
    </a>`;
    const cancelBtn = document.querySelector(".fixed.bottom-left");
    const removeBtn = document.querySelector(".fixed.bottom-right");
    cancelBtn.addEventListener("click", displayTaskList);
    removeBtn.addEventListener("click", () => {
        deleteTask(task);
    });
};

const displayTaskForm = () => {
    document.querySelector(".brand-logo").innerHTML = "Create a Task";
    document.querySelector("main").innerHTML = `
    <br/>
    <br/>
    <div class="row">
        <form  class="col s12 m6 offset-m3">
            <div class="input-field col s6">
                <input placeholder="Name" id="name" required type="text" class="validate">
                <label for="name">Name</label>
                <span class="helper-text" data-error="Name is required"></span>
            </div>
            <div class="input-field col s6">
                <select id="color">
                    <option value="red">Red</option>
                    <option value="deep-purple">Purple</option>
                    <option value="blue">Blue</option>
                    <option value="teal">Teal</option>
                </select>
                <label for="color">Color</label>
            </div>
            <div class="input-field col s12">
                <textarea id="description" required class="materialize-textarea validate"></textarea>
                <label for="description">Description</label>
                <span class="helper-text" data-error="Description is required"></span>
            </div>
            <div class="input-field col s6">
                <input type="text" id="start" class="datepicker validate" required>
                <label for="start">Start</label>
                <span class="helper-text" data-error="Start is required"></span>
            </div>
            <div class="input-field col s6">
                <input type="text" id="end" class="datepicker validate" required>
                <label for="end">End</label>
                <span class="helper-text" data-error="End is required"></span>
            </div>
            <div class="input-field col s6">
                <label for="repeat">
                    <input type="checkbox" id="repeat"/>
                    <span>Repeat</span>
                </label>
            </div>
            <div class="input-field col s6">
                <label for="alarm">
                    <input type="checkbox" id="alarm"/>
                    <span>Alarm</span>
                </label>
            </div>
        </form >
    </div>`;
    document.querySelector(".taskboard-footer").innerHTML = `
    <a class="save-task fixed bottom-left btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">save</i>
    </a>`;
    M.Datepicker.init(document.querySelectorAll('.datepicker'));
    M.FormSelect.init(document.querySelectorAll('select'));
    document.querySelector(".save-task").onclick = () => {
        const validateLength = document.querySelectorAll(".validate").length;
        const validLength = document.querySelectorAll(".valid").length;
        if (validLength == validateLength) {
            const task = createTask(
                document.querySelector("#name").value,
                document.querySelector("#description").value,
                document.querySelector("#repeat").checked,
                document.querySelector("#start").value,
                document.querySelector("#end").value,
                document.querySelector("#alarm").checked,
                document.querySelector("#color").value
            );
            saveTask(task);
        }
    };
};

const displayTaskList = () => {
    document.querySelector(".brand-logo").innerHTML = "Task Board";
    let mainHTML = ` 
    <br/>
    <br/>
    <div class="row">
    <div class="col s12 m6 offset-m3">`;
    taskList.forEach((value, key) => {
        mainHTML += `
        <div class="task-${key} chip col s12 center ${value.color} lighten-1 white-text">
        ${value.name}
        </div>
        <br/>
        <br/>`;
    });
    mainHTML += `
    </div>
    </div>`;
    document.querySelector("main").innerHTML = mainHTML;
    document.querySelector(".taskboard-footer").innerHTML = `
    <a class="fixed bottom-left btn-floating btn-large waves-effect waves-light red">
    <i class="material-icons">add</i>
    </a>`;
    taskList.forEach((value, key) => {
        document.querySelector(`.task-${key}`).addEventListener("click", () => {
            displayTask(value);
        });
    });
    document.querySelector(`.fixed.bottom-left`).addEventListener("click", displayTaskForm);
};

const deleteTask = (task) => {
    const key = taskList.indexOf(task);
    taskList.splice(key, 1);
    displayTaskList();
};

const saveTask = (task) => {
    const xhr = new XMLHttpRequest();
    taskList.push(task);
    xhr.open("PUT","https://api.jsonbin.io/b/5f2d46621823333f8f1ea316");
    xhr.setRequestHeader("secret-key","$2a$10$t7NQV0SJWhqIUaR0lidxAOrjP8o3Nv7lG3VySw3zjaCU14vZF0X.y");
    xhr.setRequestHeader("versioning", "false");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = displayTaskList;
    xhr.send(JSON.stringify(taskList));
};

const editTask = (task) => { };


displayTaskList();
