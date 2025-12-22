const loggedInData = JSON.parse(localStorage.getItem('logeedInData'));

let html = ``;
console.log(loggedInData);

document.querySelector('.js-content').innerHTML = 
`
<div>
    <h2Hire Sight</h2>
    <button class = 'js-profile-btn'>Profile</button>
    <div class = 'js-profile-section'></div>
    <label>Connections:</label>
    <h4>0</h4>
    <button>Invitations</button>
</div>
`;

document.querySelector('.js-profile-btn').addEventListener('click', () => {
const { Name, Contact, Address, Email, Password } = loggedInData.personalData;
const { Education_Qualification, Experience, PG, Role, UG, _10_, _10_2_ } = loggedInData.educationalData;
    html =`
    <div>
        <div>
            <h3>Personal Data:</h3>
            <p>${Name}</p>
            <p>${Contact}</p>
            <p>${Address}</p>
            <p>${Email}</p>
            <p>${Password}</p>
        </div>
        <div>
            <h3>Educational Data:</h3>
            <p>${Education_Qualification}</p>
            <p>${_10_}</p>
            <p>${_10_2_}</p>
            <p>${UG}</p>
            <p>${PG}</p>
            <p>${Role}</p>
            <p>${Experience}</p>
        </div>
    </div>
    `;

    document.querySelector('.js-profile-section').innerHTML = html;

});

