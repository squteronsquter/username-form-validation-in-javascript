// Main JavaScript File

const formSubmit = document.querySelector('.signup-form');
const username = formSubmit.username;
const usernamePattern = /^[a-zA-Z0-9]{8,}$/;
const feedbackPositive = document.querySelector('.feedback-positive');
const feedbackNegative = document.querySelector('.feedback-negative');

formSubmit.addEventListener('submit', e => {
  e.preventDefault();
  console.log(formSubmit.username.value);

  let result = usernamePattern.test(formSubmit.username.value);
  if (result) {
    feedbackNegative.innerHTML = ``;
    feedbackPositive.innerHTML = `
    <div class="bg-green-light text-green-darkest px-2 py-2 mb-4">
    <p>Well done! This is a valid username.</p>
    </div>
    `;
  } else {
    feedbackPositive.innerHTML = ``;
    feedbackNegative.innerHTML = `
    <div class="bg-red-dark text-red-lightest px-2 py-2 mb-4">
    <p>Wrong username. Usernames must be at least 8 characters long. </p>
    <p>Must contain only letters and numbers. No special characters like: @.!,&*$^  are allowed.</p>
    </div>
    `;
  }
});

formSubmit.addEventListener('keyup', e => {
  if (usernamePattern.test(e.target.value)) {
    feedbackPositive.innerHTML = ``;
    feedbackNegative.innerHTML = ``;
    username.setAttribute(
      'class',
      'shadow appearance-none border rounded w-full py-2 px-3 text-green-darkest bg-green-light leading-tight focus:outline-none focus:shadow-outline'
    );
  } else {
    feedbackPositive.innerHTML = ``;
    feedbackNegative.innerHTML = ``;
    username.setAttribute(
      'class',
      'shadow appearance-none border rounded w-full py-2 px-3 text-red-dark bg-red-lighter leading-tight focus:outline-none focus:shadow-outline'
    );
  }
});
