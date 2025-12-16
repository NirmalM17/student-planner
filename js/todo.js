let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.done) {
            li.classList.add("completed");
        }

        li.onclick = () => toggleTask(index);

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.style.marginLeft = "10px";
        delBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTask(index);
        };

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({ text: input.value, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();
