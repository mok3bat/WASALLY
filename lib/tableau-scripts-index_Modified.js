"strict";

//import { TableauEventType } from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js';

// Import the functions or variables from tokenGeneration.js
import { generateToken } from './generateToken.js';

function getFreshToken() {
  // Call the function to generate the token
  const token = generateToken();
  //console.log(token);
  // Use the retrieved value in your JavaScript code
  var tableauVizTags = document.getElementsByTagName("tableau-viz");
  for (var i = 0; i < 1; i++) {
    console.log("44");
    var tableauVizTag = tableauVizTags[i];
    tableauVizTag.setAttribute("token", token);
  }
}

// Call the function initially to generate the token
getFreshToken();

// Schedule the function to run every 9 minutes
setInterval(getFreshToken, 9 * 60 * 1000); // 9 minutes * 60 seconds * 1000 milliseconds


// ##########

var viz = document.getElementById("tableauViz1");
// document.querySelector(".btn-group #dailyChange").classList.add("active");
viz.addEventListener("markselectionchanged", handleMarkSelection);

/*  Methods */

function handleMarkSelection() {
  alert("Mark(s) selected!");
  // code to handle the mark selection goes here
}

//sheet.changeParameterValueAsync("Select Axis", "Weekly Change");
//console.log('ok');

document.querySelectorAll(".btn-group .btn").forEach((item) => {
  item.addEventListener("click", function () {
    //handle click
    var activeViz1 = document.getElementById("tableauViz1");
    var activeWorkbook1 = activeViz1.workbook;
    var btnId = item.id;
    console.log(btnId);
    if (btnId === "dailyChange") {
      activeWorkbook1.changeParameterValueAsync("Select Axis", "Daily Change");
    } else if (btnId === "weeklyChange") {
      activeWorkbook1.changeParameterValueAsync("Select Axis", "Weekly Change");
    } else if (btnId === "monthlyChange") {
      activeWorkbook1.changeParameterValueAsync(
        "Select Axis",
        "Monthly Change"
      );
    }
  });
});

/*Slider Update*/
var slider = document.getElementById("customRange3");
var output = document.getElementById("sliderValue");
output.innerHTML = parseFloat(slider.value).toFixed(0) + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  var activeViz2 = document.getElementById("tableauViz4");
  var activeWorkbook2 = activeViz2.workbook;
  console.log(parseFloat(this.value / 100).toFixed(2));
  activeWorkbook2.changeParameterValueAsync(
    "Select %",
    parseFloat(this.value / 100).toFixed(2)
  );
  output.innerHTML = parseFloat(this.value).toFixed(0) + "%";
};

// ###########

// Function to customize the background of the visualization
function customizeBackground() {
  console.log("here");
  console.log(viz.style.backgroundColor);
  viz.style.backgroundColor = "#f2f2f2";
  console.log(viz.style.backgroundColor);
  console.log(viz);
}
