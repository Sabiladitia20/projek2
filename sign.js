const loglink = document.querySelector('.login-link');
const reglink = document.querySelector('.register-link')
const wrapper = document.querySelector('.wrapper');

loglink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});


