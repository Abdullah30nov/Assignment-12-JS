function addtodo(){
    var input = document.getElementById('inputField');
if(input.value === ""){
    alert("please enter your list");
}
else{
    var liElement = document.getElementById('list');
    var liElement = document.createElement('li');
    var liText = document.createTextNode(input.value);
    
liElement.appendChild(liText);
list.appendChild(liElement);

var editbtn = document.createElement('button');
var editbtnText = document.createTextNode('edit');
editbtn.setAttribute("class","libtn");
editbtn.setAttribute("onclick","editLibtn(this)");
editbtn.appendChild(editbtnText);
liElement.appendChild(editbtn);

var delbtn = document.createElement('button');
var delbtnText = document.createTextNode('Delete');
delbtn.setAttribute("class","libtn");
delbtn.setAttribute("onclick","delLibtn(this)");
delbtn.appendChild(delbtnText);
liElement.appendChild(delbtn);
}
input.value = "";
}

function delLibtn(e){
    e.parentNode.remove();
}

function editLibtn(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter update value", val);
    if(editvalue.value === ""){
        alert("Pleae fill the list...");
    }
    else{
        e.parentNode.firstChild.nodeValue = editvalue
    }
}

function deleteAll(){
    list.innerHTML = "";
}