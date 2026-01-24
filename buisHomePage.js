const loggedInData = JSON.parse(localStorage.getItem('loggedInData'));
let candidateArray = JSON.parse(localStorage.getItem('dataArray'));

let matchingCandidateArray = [];

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

let input = document.querySelector('.js-role-inputBtn');

document.querySelector('.js-searchBtn').addEventListener("click", () => {
    let inputValue = input.value;
    candidateArray.forEach((element) => {
        if(element.educationalData.Role === inputValue){
            console.log('found!!!!', element);
            matchingCandidateArray.push(element);
        }
    })
    displayMatchingCandidateArray();
});

function displayMatchingCandidateArray(){
    let html = ``;
    let divcontent = ``;
    matchingCandidateArray.forEach((element) => {
            html =
            `
            <button class = "js-employeeBtn" data-id = '${element.personalData.Contact}' >${element.personalData.Name}</button>
            `;
            divcontent += html;
        })
    document.querySelector('.js-candidate-content-1').innerHTML = divcontent;  
    loadCandidates();
}

function loadCandidates(){
document.querySelectorAll('.js-employeeBtn').forEach((button) => {
    button.addEventListener('click', () => {
        const btnId = button.dataset.id;
        viewCandidate(btnId);
    })
})
}

function viewCandidate(id){
    matchingCandidateArray.forEach((element) => {
        if(id == element.personalData.Contact){
            console.log('clicked!!!', element);
            document.querySelector('.js-candidate-content-2').innerHTML=`
            <div>
                <h4>Name: ${element.personalData.Name}</h4>
                <h4>Phone no.: ${element.personalData.Contact}</h4>
                <h4 style:"font-style:bold">Address: ${element.personalData.Address}</h4>
                <h4>E-mail: ${element.personalData.Email}</h4>
                <h4>Password: ${element.personalData.Password}</h4><br>
                <h2>Educational details:-</h2>
                <h4>Educational qualification: ${element.educationalData.Education_Qualification}</h4>
                <h4>10th board: ${element.educationalData._10_}</h4>
                <h4>12th board: ${element.educationalData._10_2_}</h4>
                <h4>University(UG): ${element.educationalData.UG}</h4>
                <h4>University(PG): ${element.educationalData.PG}</h4>
                <h4>Experience: ${element.educationalData.Experience}</h4>
                <h4>Job-role: ${element.educationalData.Role}</h4>
                <button>Connect</button><br><br>
                <button>Back</button><br><br>
            </div>
            `;
        }
    })
}

