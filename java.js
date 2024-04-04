function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("todo-list").appendChild(li);
    }
    document.getElementById("todo-input").value = "";

    li.addEventListener('click', function() {
        li.classList.toggle('checked');
    });

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
