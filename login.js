const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const body = document.getElementById('body');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
