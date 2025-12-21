const dataArray = JSON.parse(localStorage.getItem('dataArray')) || [];

export function pushToArray(value){
    dataArray.push(value);
    console.log('value', value);
    console.log('dataArray', dataArray);

    localStorage.setItem('dataArray', JSON.stringify(dataArray));
}
