// JavaScript Code
document.getElementById("add").addEventListener("click", addFunction),
count = 0;
function addFunction() {
    // Input value declaration
    var taskValue = document.getElementById("task").value;
    var descriptionValue = document.getElementById("description").value;
    // If method
    if (taskValue != "" && descriptionValue != "") { 
        // Table insert method
        var table = document.getElementById("dataTable");
        var rowAdd = table.insertRow();

        // Serial Number
        var serialNum = rowAdd.insertCell(0);
        count += 1;
        serialNum.innerHTML = count;

        // Input Value
        var taskText = rowAdd.insertCell(1);
        var descriptionText = rowAdd.insertCell(2);
        taskText.innerHTML = taskValue;
        descriptionText.innerHTML = descriptionValue; 

        // Delete button
        var removeRow = rowAdd.insertCell(3);
        removeRow.innerHTML = "<button class='form-control btn btn-danger'>Delete</button>";  
        // Remove function
        removeRow.addEventListener("click" , function () {
            rowAdd.classList.add("Delete");
        });
    } else {
        alert("You must write something!");
    }
}