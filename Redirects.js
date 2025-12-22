document.querySelectorAll('.js-redirectTo').forEach((button) => {
    button.addEventListener('click', () => {
        const redirectId = button.dataset.redirectId;
        console.log(redirectId);
        window.location.href = redirectId;
    })
})

if(document.querySelector('.js-profileView-test')){
document.querySelector('.js-profileView-test').addEventListener('click', () => {
    console.log(JSON.parse(localStorage.getItem('dataArray')));
})
}
