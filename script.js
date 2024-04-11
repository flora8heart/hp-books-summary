// Set button to change background color of main page

// Declare and initialise color button variable
const colorTogglebtn = document.querySelector("#toggle-color");

// Inital background color is pink as per css
isPink = true;

// Set button to listen for click and create anonymous function to change background color
colorTogglebtn.addEventListener('click', function(event){
  if (isPink == true){
    document.body.style.backgroundColor = '#DBCDF0';
    isPink = false;
  }
  else {
    document.body.style.backgroundColor = '#fff1f5';
    isPink = true;
  }
});
