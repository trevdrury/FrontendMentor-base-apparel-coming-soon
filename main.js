let form = document.getElementById('emailForm');

form.addEventListener('submit', () => {
  let emailField = document.getElementById('emailField');
  let errorIcon = document.getElementById('errorIcon');
  let errorMessage = document.getElementById('errorMessage');

  let email = emailField.value;

  if (emailIsValid(email)) {
    validEmail();
  } else {
    invalidEmail();
  }
});

function invalidEmail() {
  emailField.style.border = '2px solid hsl(0, 93%, 68%)';
  errorIcon.style.display = 'inherit';
  errorMessage.style.display = 'inherit';
}

function validEmail() {
  emailField.style.border = '1px solid hsl(0, 36%, 70%)';
  errorIcon.style.display = 'none';
  errorMessage.style.display = 'none';
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}