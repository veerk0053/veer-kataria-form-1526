const button = document.getElementById('submit-button');

const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');


const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;



function validateForm(event) {

  
  
  event.preventDefault(); 
  

  let data = {};
  let errors = [];

  if (fullNameInput.value.trim() === '') {
    errors.push("Full Name is required.");
  } else {
    data.fullname = fullNameInput.value.trim();
  }

  if (emailInput.value.trim() === '') {
    errors.push("Email is required.");
  } else if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("Invalid Email Address.");
  } else {
    data.email = emailInput.value.trim();
  }


  if (messageInput.value.trim() === '') {
    errors.push("Message is required.");
  } else {
    data.message = messageInput.value.trim();
  }

  if (errors.length > 0) {
    console.log(errors);

  } else {
    console.log("Form data:", data);
    clearForm();
  }
}


function clearForm() {
  fullNameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

button.addEventListener('click', validateForm);