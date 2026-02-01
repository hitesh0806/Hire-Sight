import { pushToArray } from "./saveData.js";

function loadPage(){

const loggedInData = JSON.parse(localStorage.getItem('loggedInDataEmp'));

let msg;

function getInvitation(){
msg = JSON.parse(localStorage.getItem(loggedInData.personalData.Contact));
if(msg){
console.log(msg.company);
}
}

let html = ``;
console.log(loggedInData);
let connections = JSON.parse(localStorage.getItem('connections'))||0;
let connectedCompanies = JSON.parse(localStorage.getItem('connectedCompanies')) || [];
console.log(connectedCompanies);

document.querySelector('.js-content').innerHTML = 
`
<div>
    <h2>Hire Sight</h2>
    <button class = 'js-profile-btn'>Profile</button>
    <div class = 'js-profile-section'></div>
    <label>Connections:${connections}</label>
    <h4>0</h4>
    <button class = 'js-invitations'>Invitations</button>
    <div class = 'js-content-2'></div>
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

document.querySelector('.js-invitations').addEventListener('click', () => {

    getInvitation();
    console.log('clicked');
    console.log(loggedInData.personalData.Contact);
    console.log(msg.html);
    document.querySelector('.js-content-2').innerHTML = msg.html;
    loadInvitation();

})

function loadInvitation(){
    document.querySelectorAll('.js-decision').forEach((button) => {
        button.addEventListener("click", () => {
            const btnValue = button.dataset.decision;
            if(btnValue === 'yes'){
                connections++;
                console.log('clicked yes');
                console.log(connections);
                console.log(msg.company);
                pushToArray(connectedCompanies ,msg.company ,'connectedCompanies');

            }else{
                console.log("clicked no");
            }
            localStorage.removeItem(loggedInData.personalData.Contact);
            document.querySelector('.js-content-2').innerHTML = ``;
            localStorage.setItem('connections',JSON.stringify(connections));
            loadPage();
        })
    })
}

}
loadPage();

