var firebaseConfig = {
    apiKey: "AIzaSyD78lvgHoNNXXfi2yo5Kpd5i1UrNaTB5do",
    authDomain: "todo-app-test-71431.firebaseapp.com",
    databaseURL: "https://todo-app-test-71431-default-rtdb.firebaseio.com",
    projectId: "todo-app-test-71431",
    storageBucket: "todo-app-test-71431.appspot.com",
    messagingSenderId: "679826278245",
    appId: "1:679826278245:web:4e9d282e86c6ffc636438c"
};

var app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();

firebase.database().ref("Todos").on("child_added", function (data) {
    // Get the value of the input field
    var input = document.getElementById('inputField').value;

    // If input field is empty, show an alert
    if (input === "") {
        alert('Please fill this field');
    } else {
        // Create a new list item
        var liElement = document.createElement('li');
        var liText = document.createTextNode(data.val().value);
        liElement.appendChild(liText);

        // Create edit button
        var editbtn = document.createElement('button');
        editbtn.textContent = "Edit";
        editbtn.setAttribute("class", "libtn");
        editbtn.setAttribute("onclick", "editLibtn(this)");
        editbtn.setAttribute("id", data.key);
        liElement.appendChild(editbtn);

        // Create delete button
        var delbtn = document.createElement('button');
        delbtn.textContent = 'Delete';
        delbtn.setAttribute("class", "libtn");
        delbtn.setAttribute("onclick", "delLibtn(this)");
        delbtn.setAttribute("id", data.key);
        liElement.appendChild(delbtn);

        // Append list item to the list
        document.getElementById('list').appendChild(liElement);
    }
});

function addtodo() {
    var input = document.getElementById('inputField').value;
    var btn = document.getElementById('btnadd').value;
    var key = Date.now().toString(25);
    if (input === "") {
        btn.dissable = true
    } else {
        firebase.database().ref("Todos/" + key).set({
            value: input,
            key: key
        });
        document.getElementById('inputField').value = "";
    }
    
}


function delLibtn(e) {
    var key = e.id;
    // Remove todo from the database
    firebase.database().ref("Todos/" + key).remove();
    // Remove todo from the DOM
    e.parentNode.remove();
}

function editLibtn(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter update value", val);

    // Check if editvalue is empty or null
    if (editvalue === "" || editvalue === null) {
        alert("Please enter a value.");
    } else {
        // Update todo in the database
        firebase.database().ref("Todos/" + e.id).update({
            value: editvalue
        });
        // Update todo in the DOM
        e.parentNode.firstChild.nodeValue = editvalue;
    }
}

function deleteAll() {
    // Remove all todos from the database
    firebase.database().ref("Todos").remove();
    // Clear the list in the DOM
    document.getElementById('list').innerHTML = "";
}