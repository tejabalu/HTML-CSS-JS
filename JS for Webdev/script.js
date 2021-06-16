function sayhello(){
    var namei = document.getElementById("name").value;
    document.getElementById("container").innerHTML = "<h2>" + namei + "</h2>";
}

document.querySelector("button").addEventListener("click", sayhello);