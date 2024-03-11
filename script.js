//fetching the display id from index.html
const display = document.getElementById("display");

//creating a function for the onclick appendToDisplay. When user clicks on the button or inputs the value, it will display. As well as include all other values.
function appendToDisplay(input){
    display.value += input;
}

//When user clicks on 'C', the function for the onclick clearDisplay will return an empty string.
function clearDisplay(){
    display.value = ""
}

//When the user clicks on '=' , the function for the  onclick calculate will evaluate the displayed value.
function calculate(){
    try{
            display.value = eval(display.value)

    //To catch cases in which an error may occur. It will display 'Error'
    }catch(error){
        display.value = "Error"
    }
}