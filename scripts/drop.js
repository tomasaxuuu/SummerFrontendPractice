const todos = document.querySelectorAll(".task");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((task) => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});

function dragStart() {
    draggableTodo = this;
    console.log("dragStart");
}

function dragEnd() {
    draggableTodo = null;
    console.log("dragEnd");
}

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.style.border = "1px dashed #ccc";
    console.log("Enter");
}
function dragLeave() {
    this.style.border = "none";
    console.log("Leave");
}

function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");
}