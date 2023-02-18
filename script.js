// Get the toggle switch inputs
const studentSwitch = document.getElementById("student-toggle");
const teacherSwitch = document.getElementById("teacher-toggle");

// Get the form elements
const studentForm = document.getElementById("student-form");
const teacherForm = document.getElementById("teacher-form");

// Set the default form visibility
studentForm.style.display = "block";
teacherForm.style.display = "none";

// Add event listeners to the toggle switches
studentSwitch.addEventListener("change", function() {
  if (studentSwitch.checked) {
    studentForm.style.display = "block";
    teacherForm.style.display = "none";
  }
});

teacherSwitch.addEventListener("change", function() {
  if (teacherSwitch.checked) {
    teacherForm.style.display = "block";
    studentForm.style.display = "none";
  }
});
