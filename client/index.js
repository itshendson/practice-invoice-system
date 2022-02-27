let firstName = document.getElementById('input-first-name');
let lastName = document.getElementById('input-last-name');
let item = document.getElementById('input-item');
let price = document.getElementById('input-price');
let resultField = document.getElementById('result-container');
const submitBtn = document.getElementById('form-button');

onSubmitButtonClick = async () => {
    let invoiceDataUrl = `http://localhost:3000/submit/${firstName.value},${lastName.value},${item.value},${price.value}`;
    let options = {
        method: 'POST'
    }

    const response = await fetch(invoiceDataUrl, options);
    const responseJson = await response.json();
    console.log(responseJson);

    resultField.innerHTML = `${responseJson[0]}, ${responseJson[1]}, ${responseJson[2]}, ${responseJson[3]}`;   
    firstName.value = "";
    lastName.value = "";
    item.value = "";
    price.value = "";
}

submitBtn.addEventListener("click", onSubmitButtonClick);



