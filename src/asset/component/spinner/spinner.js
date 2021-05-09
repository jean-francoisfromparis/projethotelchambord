/**
 * Spinner
 * -------
 * @description Waits for the page to load with a loading message
 */
const spinner = document.querySelector('#spinner');
window.addEventListener('load',()=> {
    spinner.classList.add("visually-hidden");
})