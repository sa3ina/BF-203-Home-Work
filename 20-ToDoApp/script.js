let input = document.querySelector(".addToDo");
let plusBtn = document.querySelector(".plusBtn");
let container = document.querySelector(".container");
let errorText = document.getElementById("errorText");
let noTasksText = document.getElementById("noTasksText");

plusBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let taskText = input.value;
  if (taskText.trim() !== "") {
    let taskElement = document.createElement("div");
    taskElement.className = "tasks";
    taskElement.textContent = taskText;
    container.appendChild(taskElement);
    input.value = "";

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
      if (confirm("Are you sure to delete?")) {
        container.removeChild(taskElement);
        updateNoTasksText();
      }
    });
    taskElement.appendChild(deleteButton);

    let markAsDoneButton = document.createElement("button");
    markAsDoneButton.innerHTML =
      '<i class="fa-solid fa-check" style="color: #ffffff;"></i>';
    markAsDoneButton.className = "mark-as-done";
    markAsDoneButton.addEventListener("click", () => {
      taskElement.classList.toggle("done");
    });
    taskElement.appendChild(markAsDoneButton);

    errorText.style.display = "none";
    updateNoTasksText();
  } else {
    errorText.style.display = "block";
  }

  function updateNoTasksText() {
    if (container.children.length === 0) {
      noTasksText.style.display = "block";
    } else {
      noTasksText.style.display = "none";
    }
  }
});
