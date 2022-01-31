const taskList = [];

function submitHandler() {
	event.preventDefault();

	const newTask = document.querySelector("#newTask").value;

	console.log(newTask);

	if (newTask != null || newTask != "") {
		taskList.push(newTask);
	} else {
		alert("Invalid Data");
	}

	console.log(taskList);
	listTasks();
}

function listTasks() {
	let len = taskList.length;

	let taskHTML = "";

	for (i = 0; i < len; i++) {
		taskList[i];
		let task = taskList[i];
		let li = `<li class = list-group-item>${task}</li>`;
		taskHTML += li;
	}
	console.log(taskHTML);
	document.getElementById("taskLists").innerHTML = taskHTML;
}

listTasks();
