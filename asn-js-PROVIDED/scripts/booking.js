/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var monday_button = document.getElementById("monday")
var tuesday_button = document.getElementById("tuesday")
var wednesday_button = document.getElementById("wednesday")
var thursday_button = document.getElementById("thursday")
var friday_button = document.getElementById("friday")
var jarr = document.getElementById("calculated-cost");
var array = [0];
var array2 = [0];
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clear_button = document.getElementById("clear-button")

function clear(){
   jarr.innerHTML = 0 ;
   monday_button.style.background = "";
   half.style.background = ""
   tuesday_button.style.background = ""
   wednesday_button.style.background = ""
    thursday_button.style.background = ""
    friday_button.style.background = ""
    full.style.background = ""
    array.pop()
    array2.pop()
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var half = document.getElementById("half");

function half_cal() {
    clear_button.addEventListener("click", clear)
    half.style.background = "#E5AF42"
    monday_button.addEventListener("click", function(){
        monday_button.style.background = "#E5AF42"
        array.push(20)
        let sum = 0;
        for (const item of array) {
            sum += item
        }
        jarr.innerHTML = sum;
    })
    tuesday_button.addEventListener("click", function(){
        tuesday_button.style.background = "#E5AF42"
        array.push(20);
        let sum = 0;
        for (const item of array) {
            sum += item
        }
        jarr.innerHTML = sum;
    })
    wednesday_button.addEventListener("click", function(){
        wednesday_button.style.background = "#E5AF42"
        array.push(20);
        let sum = 0;
        for (const item of array) {
            sum += item
        }
        jarr.innerHTML = sum;
    })    
    thursday_button.addEventListener("click", function(){
        thursday_button.style.background = "#E5AF42"
        array.push(20);
        let sum = 0;
        for (const item of array) {
            sum += item
        }
        jarr.innerHTML = sum;
    })  
    friday_button.addEventListener("click", function(){
        friday_button.style.background = "#E5AF42"
        array.push(20);
        let sum = 0;
        for (const item of array) {
            sum += item
        }
        jarr.innerHTML = sum;
    })    
      

    
}

function full_cal() {
    clear_button.addEventListener("click", clear)
    full.style.background = "#E5AF42"
    monday_button.addEventListener("click", function(){
        monday_button.style.background = "#E5AF42"
        array2.push(35)
        let sum = 0;
        for (const item of array2) {
            sum += item
        }
        jarr.innerHTML = sum;
    })
    tuesday_button.addEventListener("click", function(){
        tuesday_button.style.background = "#E5AF42"
        array2.push(35);
        let sum = 0;
        for (const item of array2) {
            sum += item
        }
        jarr.innerHTML = sum;
    })
    wednesday_button.addEventListener("click", function(){
        wednesday_button.style.background = "#E5AF42"
        array2.push(35);
        let sum = 0;
        for (const item of array2) {
            sum += item
        }
        jarr.innerHTML = sum;
    })    
    thursday_button.addEventListener("click", function(){
        thursday_button.style.background = "#E5AF42"
        array2.push(35);
        let sum = 0;
        for (const item of array2) {
            sum += item
        }
        jarr.innerHTML = sum;
    })  
    friday_button.addEventListener("click", function(){
        friday_button.style.background = "#E5AF42"
        array2.push(35);
        let sum = 0;
        for (const item of array2) {
            sum += item
        }
        jarr.innerHTML = sum;
    })    
      

    
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var full = document.getElementById("full");




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
var half = document.getElementById("half");

half.addEventListener("click", half_cal)
full.addEventListener("click", full_cal)