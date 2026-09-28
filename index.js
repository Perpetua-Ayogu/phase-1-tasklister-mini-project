document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("#create-task-form");

  const input = document.querySelector("#new-task-description");

  const taskList = document.querySelector("#tasks");


  form.addEventListener("submit", function (event) {

    // stop the page from refreshing
    event.preventDefault();


    // get what the user typed
    const task = input.value.trim();


    // do not add empty task
    if (task === "") {
      return;
    }


    // create a new list item
    const newTask = document.createElement("li");


    // put the task inside it
    newTask.textContent = task;


    // add it to the task list
    taskList.appendChild(newTask);


    // clear the input
    input.value = "";

  });

});