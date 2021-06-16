(function(global){
    
    var ajaxUtils = {};
    
    ajaxUtils.sendGetRequest = function(requestUrl, responseClientHandler) {
        // assign the request object to the local variable. 
        var request = new XMLHttpRequest();
        
        // everytime there is a change in the state of the request, the following function is called.
        request.onreadystatechange = function(){
            handleRawResponse(request, responseClientHandler);
        };
        request.open("Get", requestUrl, true);
        request.send(null);

    };

    // is this similar to the call back function?
    // these are the additional steps that we take so that the response handler doesnt have to do 
    function handleRawResponse(request, responseClientHandler){
        if ((request.readyState == 4) && (request.status == 200)) {
        responseClientHandler(request);
        }
    }

    // $ is a colloquial name that we give that says that the object is a global variable. 
    global.$ajaxUtils = ajaxUtils;

})(window);

// Steps to be taken:
// create an ajax function that takes the responseUrl and clientrespponsehandler as the funcitons. 
// define the function of ajax function by taking the XMLresponse and attaching a rawresponsehandler to it and send it to the server using get and requestUrl. 
// define the rawresponsehander by setting the readystate and status of the request. if they satisfy the required criterion, pass the same request to the clientresponsehandler. 
// make the ajax function global. 
// this script is an iife that gets triggered as soon as the script is called. 