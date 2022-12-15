// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var page = document.getElementById("main");
var sumbit = document.getElementById("submit-button")
var contact = document.getElementById("contact-page");

function thanks(){
    ty = "thank you for your message!";
    contact.classList.add("large-text");
    contact.textContent = ty;
    return false
}

sumbit.addEventListener("click", thanks)
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

