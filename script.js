// Set button to change background color of main page

// Declare and initialise color button variable
const colorTogglebtn = document.querySelector("#toggle-color");

// Set button to listen for click and create anonymous function to change background color
colorTogglebtn.addEventListener('click', function(event){
  document.body.style.backgroundColor = '#DBCDF0';
});
