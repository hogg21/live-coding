const listElem = document.querySelector(".list");

const tasks = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Pick up Tom from airport", done: false },
  { id: 3, text: "Visit party", done: false },
  { id: 4, text: "Visit doctor", done: true },
  { id: 5, text: "Buy meat", done: true },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", index);
      checkbox.checked = done;

      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);
// events
// 1.add event to the element
// 2. create elem handlers
// list
// click

// WEB FLOW
// 1.GET DATA
// 2. RENDER
// 3.UPDATE DATA
// 4.RE-RENDER

// input: string, func
// output: undefined

// input: event
// output: undefined

// algo
// 0.get task id
// 1.find task by id
// 2.update task
// 3.re-render
function updateTaskHandler(event) {
  console.log(event.target.classList.contains("list__item-checkbox"));
  console.log(event.target.getAttribute("type"));
  if (!event.target.classList.contains("list__item-checkbox")) {
    return null;
  }
  const { id } = event.target.dataset;
  // TODO
}
listElem.addEventListener("click", updateTaskHandler);
