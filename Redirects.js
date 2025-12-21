/*function redirectTo(location){
    window.location.href = location;
}*/
document.querySelectorAll('.js-redirectTo').forEach((button) => {
    button.addEventListener('click', () => {
        const redirectId = button.dataset.redirectId;
        console.log(redirectId);
        window.location.href = redirectId;
    })
})

let viewBtn = document.querySelector('.js-profileView-test');
if(viewBtn){
viewBtn.addEventListener('click', () => {
    console.log(JSON.parse(localStorage.getItem('dataArray')));
})
}
