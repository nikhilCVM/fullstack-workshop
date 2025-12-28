let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
let currentFilter = "All";

function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
  renderTasks();
}

function addTask() {
  const text = document.getElementById("taskInput").value.trim();
  const category = document.getElementById("categorySelect").value;

  if (!text) return;

  tasks.push({ id: Date.now(), text, category, completed: false });
  document.getElementById("taskInput").value = "";
  saveTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
}

function setFilter(filter) {
  currentFilter = filter;
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const filteredTasks = currentFilter === "All"
    ? tasks
    : tasks.filter(task => task.category === currentFilter);

  filteredTasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${task.id})" />
        ${task.text} <span class="category-label">[${task.category}]</span>
      </div>
      <span class="delete" onclick="deleteTask(${task.id})">✖</span>
    `;
    list.appendChild(div);
  });

  // Update counts
  const workTasks = tasks.filter(t => t.category === "Work");
  const personalTasks = tasks.filter(t => t.category === "Personal");

  document.getElementById("workCount").innerText = `Work: ${workTasks.length}`;
  document.getElementById("personalCount").innerText = `Personal: ${personalTasks.length}`;
  document.getElementById("totalCount").innerText = `Total: ${tasks.length}`;
}

renderTasks(); // initial load
