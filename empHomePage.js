const loggedInData = JSON.parse(localStorage.getItem('logeedInData'));

let html = ``;
console.log(loggedInData);

document.querySelector('.js-content').innerHTML = 
`
<div>
    <h2>Hire Sight</h2>
    <button class = 'js-profile-btn'>Profile</button>
    <div class = 'js-profile-section'></div>
    <label>Connections:</label>
    <h4>0</h4>
    <button>Invitations</button>
</div>
`;

let profile = false;
document.querySelector('.js-profile-btn').addEventListener('click', () => {

if(!profile){
const { Name, Contact, Address, Email, Password } = loggedInData.personalData;
const { Education_Qualification, Experience, PG, Role, UG, _10_, _10_2_ } = loggedInData.educationalData;
    html =`
    <div>
        <div>
            <h3>Personal Data:</h3>
            <p>Name: ${Name}</p>
            <p>Contact: ${Contact}</p>
            <p>Address: ${Address}</p>
            <p>Email: ${Email}</p>
            <p>Password: ${Password}</p>
        </div>
        <div>
            <h3>Educational Data:</h3>
            <p>Educational qualifications: ${Education_Qualification}</p>
            <p>10nth: ${_10_}</p>
            <p>PUC: ${_10_2_}</p>
            <p>UG: ${UG}</p>
            <p>PG: ${PG}</p>
            <p>Role intrested: ${Role}</p>
            <p>Experience: ${Experience}</p>
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

