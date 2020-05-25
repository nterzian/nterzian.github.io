$('a.w3-bar-item').click(w3_close)

// // Toggle grid padding
    function myFunction() {
      var x = document.getElementById("myGrid");
      if (x.className === "w3-row") {
        x.className = "w3-row-padding";
      } else {
        x.className = x.className.replace("w3-row-padding", "w3-row");
      }
    }
    // Open and close sidebar
    function w3_open() {
      document.getElementById("mySidebar").style.width = "100%";
      document.getElementById("mySidebar").style.display = "block";
    }

    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    }
    let next = document.getElementsByTagName('button')[0]
    let steps = ['landing-page', 'game-start', 'game-over']
    let counter = 0;
    next.addEventListener('click', moveForward)

    function moveForward() {
      let step = steps[counter]
      let section = document.getElementsByClassName(step)[0]
      var zindex = window.getComputedStyle(section, null).getPropertyValue("z-index");
      section.className = 'hide'
      counter += 1;
    }
    // Dog Calculator
    function calculateDogAge() {
      var myAge = document.getElementById('years').value;
      var dogAge = ((Math.log(myAge) * 16) + 31);
      document.getElementById('wynik').innerHTML = Math.round(dogAge) + ' years old in human years.';
      if (myAge == "") {
        alert("HEY SILLY! You forgot to put a number.");
        return false;
      
    }
    }
   // Pressing enter submits results 
//         var input = document.getElementById("years");
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("button1").click();
   
//     }