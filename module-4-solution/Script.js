var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let index = 0; index < names.length; index++) {
    var namei = names[index];
    var firstletter = namei.charAt(0)
    var firstlettersmall = firstletter.toLowerCase()
    // console.log(firstlettersmall)

    if (firstlettersmall == "j") {
        speakgoodbye(namei);        
    } else {
        speakhello(namei);
    }
    
}