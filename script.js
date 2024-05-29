 const inputBox = document.getElementById('input-box');
 const row = document.querySelector('.row');

 const listContainer = document.getElementById('list-container');
//  
 inputBox.addEventListener('input', function() {
    if (inputBox.value.trim() !== '') {
      row.classList.add('active');
    } else {
      row.classList.remove('active');
    }
  });
const counter= document.getElementById('counter');
let taskCount = 0;


 // to add a task in the javascript

 function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        taskCount++;
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    updateCounter();
 }

  //  add a eventlistener to checked the given task or to remove the task

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        updateCounter();
    }
    else if(e.target.tagName  === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        updateCounter();
    }
 }, false );

 // to save a data even after the window refresh also

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }

 function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
 }

 function updateCounter() {
    const tasks = listContainer.getElementsByTagName("li");
    taskCount = tasks.length;
    counter.textContent = taskCount;
}
 showTask();

 