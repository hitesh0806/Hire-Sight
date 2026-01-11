let dataArray = JSON.parse(localStorage.getItem('dataArray'));
let buisDataArray = JSON.parse(localStorage.getItem('buisDataArray'));

let name_ = document.querySelector('.js-name');
let password_ = document.querySelector('.js-password');

document.querySelector('.js-signInBtn').
addEventListener('click', () => {
login();
})

function login(){
    let found = false;
    const Name = name_.value;
    const Password = password_.value;
    if(dataArray){
        dataArray.forEach((element) => {
            if(Name === element.personalData.Name && 
                Password === element.personalData.Password){
                console.log('user match found');
                localStorage.setItem('loggedInData', JSON.stringify(element));
                window.location.href = 'empHomePage.html';
                found = true;
            }
        });
    }

    if(buisDataArray){
        buisDataArray.forEach((element) => {
            if(Name === element.companyName && 
                Password === element.password){
                console.log('user match found');
                localStorage.setItem('loggedInData', JSON.stringify(element));
                window.location.href = 'buisHomePage.html';
                found = true;
            }
        });
    }

    if(!found){
        console.log('User not found.')
    }

}