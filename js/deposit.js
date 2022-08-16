//Step-1 add event handeler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
//Step-2 GEt the deposti amount from DepostiInput Field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
//Step-2 GEt the deposit Current amount
//For non input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal =  depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
});