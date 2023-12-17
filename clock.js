//DONE: put the element into a variable 
// Example: document.querySelector('#clock'); 
//DONE: Get the time as a variable
//TODO: Format the time into a string
//DONE: set the innerText of the element we stored as a variable to be the time string
//DONE: figure out how to update a update an element on an interval (every 0.01s or something)
//TODO: Consider using a CSS Framework like Bulma.css
function updateTime(ev) {
    var clockElement = document.querySelector('.comic');
    var dateTime = new Date();
    var formattedDate = dateTime.toDateString();
    var formattedTime = dateTime.toTimeString();
    clockElement.textContent = `Date: ${formattedDate} \n Time: ${formattedTime} `
}
function seconds(ms) {
    return ms * 1000;
}



document.addEventListener("DOMContentLoaded", updateTime)
window.setInterval(updateTime, 30)