export function pushToArray(arrayName, value, localStorageKey){
    arrayName.push(value);
    console.log('value', value);
    console.log('dataArray', arrayName);

    localStorage.setItem(localStorageKey, JSON.stringify(arrayName));
}


