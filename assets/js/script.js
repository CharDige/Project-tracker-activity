// Global variables when needed
var addProjectBtn = $("#add-project-button");
var instructionsContainer = $("#instructions-container");
var projectContainer = $("#project-container");
var submitBtn = $("#submit-btn");


// Date and time at beginning of project tracker
var todaysDateTime = window.setInterval(function() {
    $("#currentDateTime").html(moment().format("[Current date and time:] h:mm:ss a"));
}, 1000);

// Adding event listener on submit project button
submitBtn.on("click", function() {
    console.log("This works!");
});