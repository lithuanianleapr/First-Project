let count = 0; 

function addTask() {
    count++;
    let taskTemplate = `<li class="item list=group-item">Task ${count}</link>`
    let element = document.getElementById("list");
    element.innerHTML += taskTemplate;
}