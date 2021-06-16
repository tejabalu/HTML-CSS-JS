// event handling
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("button").addEventListener("click", function(){

        var self = this;
        var namei = "";
        $ajaxUtils.sendGetRequest("data/name.txt", function(request) {
            var namei = request.responseText;
            
            document.querySelector("#content").innerHTML = "hello" + namei;
        });
    });
}

);

// as the scripts are being called in the head of HTML itself, attach an event handler so that the script activates only when the body html is loaded. DOMContentLoaded
// 