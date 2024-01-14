
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value; // Use textContent to set the text
    listContainer.appendChild(li);
    inputBox.value = ''; // Clear the input box
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "" ;
  // saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // saveData();
    }
}, false);

// function saveData(){
//     localStorage.setItem("data", listContainer.textContent);
// }
// function showTask(){
//     listContainer.textContent = localStorage.getItem("data");
// }
showTask();