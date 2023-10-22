
// Function for plane choice
function planeChoice() {
    let form = document.getElementById('myForm');
    let plane;

    for(let i =0; i < form.planeButton.length; i++) {
        if(form.planeButton[i].checked) {
            plane = form.planeButton[i].value;
            break;
        }
    }

    alert("Selected plane: " + plane);
}

// Get all plane buttons
let radioButtons = document.getElementsByName('planeButton');

// Register the event for each

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].onclick = planeChoice;
}