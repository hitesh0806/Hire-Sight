import { pushToArray } from "./saveData.js";

const buisDataArray = JSON.parse(localStorage.getItem('buisDataArray')) || [];

let buisData = JSON.parse(localStorage.getItem('buisDataArray'));
if(!buisData){
buisData = {
    companyName : undefined,
    industry : undefined,
    hqAddress : undefined,
    yearFounded : undefined,
    website : undefined,
    contactEmail : undefined,
    contactPhone : undefined,
    password : undefined
}
}

document.querySelector('.js-createBtn').addEventListener('click', () => {
    document.querySelectorAll('.js-companyDetails').forEach((input) => {
        let dataType = input.dataset.type;
        let value = input.value;

        if(dataType === "companyName"){
            buisData.companyName = value;
        }else if(dataType === "industry"){
            buisData.industry = value;
        }else if(dataType === "hqAddress"){
            buisData.hqAddress = value;
        }else if(dataType === "founded"){
            buisData.yearFounded = value;
        }else if(dataType === "website"){
            buisData.website = value;
        }else if(dataType === "contactEmail"){
            buisData.contactEmail = value;
        }else if(dataType === "contactPhone"){
            buisData.contactPhone = value;
        }else if(dataType === "password"){
            buisData.password = value;
        }
        console.log(dataType,value);
    })

    //localStorage.setItem('buisData', JSON.stringify(buisData));
    console.log(buisData);
    pushToArray(buisDataArray, buisData, "buisDataArray")

})
console.log(JSON.parse(localStorage.getItem('buisDataArray')));