function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskItem = createTaskElement(taskText);
  document.getElementById("pendingList").appendChild(taskItem);
  input.value = "";
}

function createTaskElement(text) {
  const li = document.createElement("li");

  const content = document.createElement("div");
  content.innerHTML = `<strong>${text}</strong><div class="time">Added: ${new Date().toLocaleString()}</div>`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Completed";
  completeBtn.title = "Mark as Complete";
  completeBtn.onclick = () => markComplete(li, text);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.title = "Edit Task";
  editBtn.onclick = () => editTask(li, content);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.title = "Delete Task";
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(content, actions);
  return li;
}

function markComplete(li, text) {
  li.remove();
  const completedLi = document.createElement("li");

  const content = document.createElement("div");
  content.innerHTML = `<strong>${text}</strong><div class="time">Completed: ${new Date().toLocaleString()}</div>`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editTask(completedLi, content);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => completedLi.remove();

  actions.append(editBtn, deleteBtn);
  completedLi.append(content, actions);
  document.getElementById("completedList").appendChild(completedLi);
}

function editTask(li, contentDiv) {
  const newText = prompt("Edit your task:", contentDiv.textContent.trim().split("Added:")[0].split("Completed:")[0]);
  if (newText) {
    contentDiv.innerHTML = `<strong>${newText}</strong><div class="time">Updated: ${new Date().toLocaleString()}</div>`;
  }
}
