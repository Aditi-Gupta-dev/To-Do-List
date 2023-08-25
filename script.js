document.addEventListener("DOMContentLoaded", function () {
    const newTaskInput = document.querySelector("#newtask input");
    const addTaskButton = document.querySelector("#push");
    const tasksContainer = document.querySelector("#tasks");
    const completedTasksContainer = document.querySelector("#completed-tasks");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const taskElement = createTaskElement(taskText);
            tasksContainer.appendChild(taskElement);
            newTaskInput.value = "";
        } else {
            alert("Input cannot be empty!");
        }
    }

    function createTaskElement(taskText) {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `
            <input type="checkbox">
            <p>${taskText}</p>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-trash"></i>
        `;

        const checkbox = taskElement.querySelector("input[type='checkbox']");
        const checkIcon = taskElement.querySelector(".fa-check-circle");
        const deleteIcon = taskElement.querySelector(".fa-trash");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                tasksContainer.removeChild(taskElement);
                completedTasksContainer.appendChild(taskElement);
                checkIcon.style.display = "none";
                deleteIcon.style.display = "inline";
            } else {
                completedTasksContainer.removeChild(taskElement);
                tasksContainer.appendChild(taskElement);
                checkIcon.style.display = "inline";
                deleteIcon.style.display = "none";
            }
        });

        deleteIcon.addEventListener("click", function () {
            if (checkbox.checked) {
                completedTasksContainer.removeChild(taskElement);
            } else {
                tasksContainer.removeChild(taskElement);
            }
        });

        return taskElement;
    }

});
