

let addButton = document.getElementById("add");
let inputType = document.getElementById("inputFeeld");
let todoList = document.getElementById("list");
addButton.addEventListener("click" , function () {
     todoList.classList.add("abc")
    let list = document.createElement("li");
    list.innerText = inputType.value;
    let tag = document.createElement("button") ;
    tag.innerText="D";
    let edits = document.createElement("button") ;
    edits.innerHTML="<h5>R</h5>";
    tag.setAttribute("class","remove")
    edits.setAttribute("class","edit")
    list.appendChild(tag);
    list.appendChild(edits);
    todoList.insertAdjacentElement("afterbegin",list);
    inputType.value="";
   
    tag.addEventListener("click", function () {
        list.style.textDecoration="line-through";
        tag.style.backgroundImage = "url(delete.png)";
        tag.style.border="none";
        tag.innerText ="";
        list.style.listStyleType = "disc";
    })
    tag.addEventListener("dblclick", function () {
        todoList.removeChild(list);
    })
    edits.addEventListener("dblclick",function() {
        list.innerText = inputType.value;
        list.appendChild(tag);
        list.appendChild(edits);
        inputType.value="";
    })
})