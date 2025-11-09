const nameField = document.getElementById("name");
const errorOutput = document.getElementById("form-error");
const infoOutput = document.getElementById("form-info");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const comments = document.getElementById("comments");


// add in an improved validation for the fields.

nameField.addEventListener("input", () => {
    if (nameField.validity.tooShort) {
        nameField.setCustomValidity("Enter more than 2 characters.");
        nameField.reportValidity();
    }
    else {
        nameField.setCustomValidity("");
    }
});

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Use the right email format: XX@XX.XX");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

subject.addEventListener("input", () => {
    if (subject.validity.tooShort) {
      subject.setCustomValidity("Subject line too short! Minimum 2 characters.");
      subject.reportValidity();
    } 
    else if (!/[A-Za-z0-9]/.test(subject.value)) {
        subject.setCustomValidity("Subject must include letters or numbers.");
        subject.reportValidity();
    }
    else {
      subject.setCustomValidity("");
    }
});

// add a masking mechanism for the fields