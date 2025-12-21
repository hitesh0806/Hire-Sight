//export let dataArray = [];
export let Data = JSON.parse(localStorage.getItem('data')) ;
if(!Data){
    let Data = {
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

let persDataBtn = document.querySelector('.js-addPersdata');
if(persDataBtn){
persDataBtn.addEventListener('click', () => {
    document.querySelectorAll('.personal-details').forEach((input) => {
        let detail = input.value;
        let type = input.dataset.type;

        if(type === 'name'){
            Data.personalData.Name = detail;
        }else if(type === "number"){
            Data.personalData.Contact = detail;
        }else if(type === "e-mail"){
            Data.personalData.Email = detail;
        }else if(type === 'address'){
            Data.personalData.Address = detail;
        }else if(type === 'password'){
            Data.personalData.Password = detail;
        }
    })
    console.log(Data);
    localStorage.setItem('data', JSON.stringify(Data));
})
}

