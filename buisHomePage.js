const loggedInData = JSON.parse(localStorage.getItem('loggedInData'));

let html = ``;
console.log(loggedInData);

document.querySelector('.js-content').innerHTML = 
`
<div>
    <h2>Hire Sight</h2>
    <button class = 'js-profile-btn'>Profile</button>
    <div class = 'js-profile-section'></div>
</div>

`;

let profile = false;
document.querySelector('.js-profile-btn').addEventListener('click', () => {

if(!profile){
const { companyName, contactPhone, hqAddress, contactEmail, password } = loggedInData;
    html =`
    <div>
        <div>
            <h3>Personal Data:</h3>
            <p>Name: ${companyName}</p>
            <p>Contact: ${contactPhone}</p>
            <p>Address: ${hqAddress}</p>
            <p>Email: ${contactEmail}</p>
            <p>Password: ${password}</p>
        </div>
    </div>
    `;
    profile = true;
}else if(profile){
    html = ``;
    profile = false;
}
    document.querySelector('.js-profile-section').innerHTML = html;
});

