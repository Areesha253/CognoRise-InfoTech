var taskInputBox = $("#textInput");

$(".add-task-btn").on("click", () => {
  if (taskInputBox.val() === "") {
    return alert("Enter your Task");
  } else {
    var taskList = `
      <li class="task"> 
       ${taskInputBox.val()}
       <span class="remove-task">\u00d7</span>
      </li>
      `;
    $(".task-list-items").append(taskList);
    taskInputBox.val("");
  }
});
$(".task-list-items").on("click", ".task", function () {
  $(this).toggleClass("checked-task");
});
$(".task-list-items").on("click", ".remove-task", function () {
  $(this).parent().remove();
});
