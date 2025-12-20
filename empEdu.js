let educationQualification;
let experience;
let roles;

let Data = JSON.parse(localStorage.getItem('data'));
if(!Data){
   Data = {
        personalData : {
            Name : undefined,
            Contact : undefined,
            Address : undefined,
            Email : undefined,
            Password : undefined
        },
        educationalData : {
            Education_Qualification : undefined,
            _10_ : undefined,
            _10_2_ : undefined,
            UG : undefined,
            PG : undefined,
            Experience : undefined,
            Role : undefined
        }
    }
}

document.querySelectorAll('.eduQual').forEach((button) => {
    button.addEventListener('click', () => {
        educationQualification = button.value;
        console.log(educationQualification);
        edu_qual(educationQualification);
    })
});
document.querySelectorAll('.exp').forEach((button) => {
    button.addEventListener('click', () => {
        experience = button.value;
        console.log(experience);
        experienceAmt(experience);
    })
});
document.querySelectorAll('.js-roles').forEach((button) => {
    button.addEventListener('click', () => {
        roles = button.value;
        console.log(roles);
    })
});

function edu_qual(grade){
let html = ``;
if(grade === '10'){
    html = `
    <label>10th board:</label><br>
    <input class = 'edu_details' data-grade = '10'><br><br>
    `;
}else if(grade === '10+2'){
    html = `
    <label>10th board:</label><br>
    <input class = 'edu_details' data-grade = '10'><br><br>
    <label>12 board:</label><br>
    <input class = 'edu_details' data-grade = '10+2'><br><br>
    `;
}else if(grade === 'UG'){
    html = `
    <label>10th board:</label><br>
    <input class = 'edu_details' data-grade = '10'><br><br>
    <label>12 board:</label><br>
    <input class = 'edu_details' data-grade = '10+2'><br><br>
    <label>University/Institution (UG):</label><br>
    <input class = 'edu_details' data-grade = 'UG'><br><br>
    `;
}else if(grade === 'PG'){
    html = `
    <label>10th board:</label><br>
    <input class = 'edu_details' data-grade = '10'><br><br>
    <label>12 board:</label><br>
    <input class = 'edu_details' data-grade = '10+2'><br><br>
    <label>University/Institution (UG):</label><br>
    <input class = 'edu_details' data-grade = 'UG'><br><br>
    <label>University/Institution (PG):</label><br>
    <input class = 'edu_details' data-grade = 'PG'><br><br>
    `;
}
document.querySelector('.js-grades').innerHTML = html;
};

function experienceAmt(time){
let html = ``;
if(time === 'Experienced'){
html = `
    <button class = 'exp_amt' value = 'less than 2'>Less than 2</button>
    <button class = 'exp_amt' value = '2+'>2+</button>
    <button class = 'exp_amt' value = '5+'>5+</button>
`;
}

document.querySelector('.js-experienceAmt').innerHTML = html;
document.querySelectorAll('.exp_amt').forEach((button) => {
    button.addEventListener('click', () => {
        experience = button.value;
        console.log(experience)
    })
})
}

document.querySelector('.js-createBtn').
addEventListener('click', () => {

    document.querySelectorAll('.edu_details').forEach((input) => {
        const grade = input.dataset.grade; // '10', '10+2', 'UG', 'PG'
        const value = input.value;

        if(grade === '10'){
            Data.educationalData._10_ = value;
        } 
        else if(grade === '10+2'){
            Data.educationalData._10_2_ = value;
        } 
        else if(grade === 'UG'){
            Data.educationalData.UG = value;
        } 
        else if(grade === 'PG'){
            Data.educationalData.PG = value;
        }
});


    Data.educationalData.Education_Qualification = educationQualification;
    Data.educationalData.Experience = experience;
    Data.educationalData.Role = roles;

    console.log(Data.educationalData);

    localStorage.setItem('data', JSON.stringify(Data));
})

console.log(Data);



