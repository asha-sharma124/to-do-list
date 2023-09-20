document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskItem(taskText);
            pendingTasksList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    function createTaskItem(taskText) {
        const li = document.createElement("li");
        const taskTextSpan = document.createElement("span");
        taskTextSpan.innerText = taskText;
        li.appendChild(taskTextSpan);

        const actionsDiv = document.createElement("div");
        const completeBtn = document.createElement("button");
        completeBtn.innerText = "Complete";
        completeBtn.addEventListener("click", function() {
            li.classList.add("completed");
            actionsDiv.removeChild(completeBtn);
            actionsDiv.removeChild(deleteBtn);
            completedTasksList.appendChild(li);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            li.parentNode.removeChild(li);
        });

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(deleteBtn);
        li.appendChild(actionsDiv);

        return li;
    }
});
