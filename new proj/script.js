const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

showTasks();

inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value;
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  } else {
    addBtn.classList.remove("active");
  }
}

inputBox.addEventListener('keyup', (e) => {
  if (e.keyCode === 13){
    e.preventDefault();
    enterInput();
  }
});

addBtn.onclick = enterInput;

function enterInput() {
  let userEnteredValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push([userEnteredValue, '']);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
}

addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){ 
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push([userEnteredValue, '']); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.filter(x => x[1] === '').length;
  if (listArray.length > 0){
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }
  const doneTasksNumb = document.querySelector('.doneTasks');
  doneTasksNumb.textContent = listArray.filter(x => x[1] !== '').length;
  if (listArray.filter(x => x[1] !== '').length > 0) {
    deleteDoneBtn.classList.add("active");
  } else {
    deleteDoneBtn.classList.remove("active");
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag +=  `<li><input type="checkbox" id="ch" onchange="activeCheck(this, ${index})" class="check" ${element[1]}><span>${element[0]}</span><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

function activeCheck(element, index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  if (element.checked) {
    listArray[index].pop();
    listArray[index].push('checked');
  } else {
    listArray[index].pop();
    listArray[index].push('');
  }
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

function deleteDoneTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray = listArray.filter(x => x[1] === '');
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

deleteAllBtn.onclick = ()=>{
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}
