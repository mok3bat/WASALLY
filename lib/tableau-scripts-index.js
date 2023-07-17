"strict";

//import { TableauEventType } from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js';

function getFreshToken() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://mok3bat.pythonanywhere.com/?input=new");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    console.log("22");
    if (xhr.status === 200) {
      console.log("33");
      var response = JSON.parse(xhr.responseText);
      var token = response.result;
      console.log(response, token);
      // Use the retrieved value in your JavaScript code
      var tableauVizTags = document.getElementsByTagName("tableau-viz");
      for (var i = 0; i < 1; i++) {
        console.log("44");
        var tableauVizTag = tableauVizTags[i];
        tableauVizTag.setAttribute("token", token);
      }
    } else {
      console.log("445");
      console.log("Error:", xhr.status);
    }
  };

  xhr.send();
}

// ########

// Set the flag to true initially to run the function immediately
var firstLoad = true;

// Function to handle the scheduled execution
function scheduleGetToken() {
  // Run the function on the first load
  if (firstLoad) {
    console.log("111");
    getFreshToken();
    firstLoad = false;
  }

  // Schedule the function to run every 9 minutes
  setInterval(getFreshToken, 9 * 60 * 1000);
}

// Call the scheduleFunction to start the scheduling
scheduleGetToken();

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
