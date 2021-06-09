let addTaskEl = null;
let taskEl = null;
let listEl = null;

const init = () => {
  addTaskEl = document.querySelector("#add-task");
  taskEl = document.querySelector("#task");
  listEl = document.querySelector("#list");

  attachEvents();
};

const attachEvents = () => {
  addTaskEl.addEventListener("click", onClickAddTask);
  listEl.addEventListener("click", onClickTask);
  document.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      addTask();
    }
  });
};

const onClickAddTask = () => addTask();

const addTask = () => {
  listEl.classList.remove("empty");

  const val = taskEl.value;

  const liEl = document.createElement("li");
  const btnEl = document.createElement("button");
  const contentEl = document.createElement("span");
  const iconEl = document.createElement("span");

  contentEl.classList.add("content");
  contentEl.textContent = val;
  iconEl.classList.add("material-icons");
  iconEl.textContent = "close";

  btnEl.appendChild(iconEl);

  liEl.appendChild(contentEl);
  liEl.appendChild(btnEl);

  listEl.appendChild(liEl);

  taskEl.value = "";
};

const onClickTask = ({ target }) => {
  if (target.matches("li")) {
    // if (target.classList.contains("done")) {
    //   target.classList.remove("done");
    // } else {
    //   target.classList.add("done");
    // }
    target.classList.toggle("done");
  }
  if (target.matches(".content")) {
    target.parentNode.classList.toggle("done");
  }

  if (target.matches("button")) {
    target.parentNode.remove();
  }
  if (target.matches(".material-icons")) {
    target.parentNode.parentNode.remove();
  }

  if (listEl.querySelectorAll("li").length === 0) {
    listEl.classList.toggle("empty");
  }
};

window.addEventListener("load", init);
