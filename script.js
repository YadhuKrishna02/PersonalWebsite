var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
var subjectError = document.getElementById("subject-error");

function validateName() {
  var name = document.getElementById("name").value;
  var nameInput = document.getElementById("name");

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.style.color = "red";
    nameInput.style.border = "solid 2px red";
    return false;
  }
  if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    nameError.style.color = "red";
    nameInput.style.border = "solid 2px red";

    return false;
  }
  nameError.innerHTML = "";
  // nameError.innerHTML = "Valid Name";
  nameError.style.color = "green";
  nameInput.style.border = "solid 2px green";

  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailInput = document.getElementById("email");

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.style.color = "red";
    emailInput.style.border = "solid 2px red";

    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Email invalid";
    emailError.style.color = "red";
    emailInput.style.border = "solid 2px red";

    return false;
  }
  emailError.innerHTML = "";
  emailError.style.color = "green";
  emailInput.style.border = "solid 2px green";
  return true;
}

function validateMessage() {
  var message = document.getElementById("message").value;
  var messageInput = document.getElementById("message");
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required.";
    messageInput.style.border = "solid 2px red";
    return false;
  } else {
    messageError.innerHTML = "Enter a valid message";
    messageInput.style.border = "solid 2px red";
  }

  messageError.innerHTML = "";
  messageInput.style.border = "solid 2px green";
  return true;
}

function validateSubject() {
  var message = document.getElementById("subject").value;
  var subjectInput = document.getElementById("subject");
  var required = 20;
  var left = required - message.length;

  if (left > 0) {
    subjectError.innerHTML = left + " more characters required.";
    subjectInput.style.border = "solid 2px red";

    return false;
  } else {
    subjectError.innerHTML = "Enter a valid subject";
    subjectInput.style.border = "solid 2px red";
  }

  subjectError.innerHTML = "";
  subjectInput.style.border = "solid 2px green";

  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateMessage() ||
    !validateSubject()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix all errors to submit.";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
