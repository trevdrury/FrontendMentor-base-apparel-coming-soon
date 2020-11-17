let emailField = document.getElementById('emailField');
let errorIcon = document.getElementById('errorIcon');
let errorMessage = document.getElementById('errorMessage');
let button = document.getElementById('btn');

button.addEventListener('submit', (event) => {
  let email = emailField.value; 

  event.preventDefault();

  if (emailIsValid(email)) {
    emailField.style.border = '1px solid #CE9898';
    emailField.style.opacity = '0.5';
    errorIcon.style.display = 'none';
    errorMessage.style.display = 'none';
  } else {
    emailField.style.border = '2px solid #F96464';
    emailField.style.opacity = '1';
    errorIcon.style.display = 'inline';
    errorMessage.style.display = 'inline';
  }
})

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}