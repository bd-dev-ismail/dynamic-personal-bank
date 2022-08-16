//Step-1 add event handeler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
//Step-2 GEt the deposti amount from DepostiInput Field
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newdepositAmountString);
//Step-3 GEt the deposit Current amount
//For non input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =  depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
//Step-4 add number to set the deposit
//set the deposit toal
    depositTotalElement.innerText = currentDepositTotal;
//Step-5 Get blance current total
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

//Step-6 calculate total blance
    const currentBlanceTotal = previousBlanceTotal + newDepositAmount;
//set the blance total 
    blanceTotalElement.innerText = currentBlanceTotal;
  
//Step-Extra Clear the deposit field
    depositField.value = '';
});