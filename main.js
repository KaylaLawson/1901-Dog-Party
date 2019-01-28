// GLOBAL VARIABLES 

var input = document.querySelector('.dog-name-input');
var submitBtn = document.querySelector('.submit-name-button');
var dogName = document.querySelector('#somedogs');

// EVENTLISTENERS 

submitBtn.addEventListener('click', updateName);


// FUNCTIONS 

function updateName(e) {
  e.preventDefault();
  dogName.innerText = input.value;
  input.value = '';
}

