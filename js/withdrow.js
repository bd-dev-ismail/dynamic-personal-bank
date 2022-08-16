/*Step1- Get the withdrow button with add event listener
2.Get the withdrow amount from the withdrow input field
2.5. Also make sure to convert string to number using parsefolat()
3.GEt previous withdrow amount
4.Calculate toal withdrow amount
4.5.set total withdrow amount
5.Get the balance total
5.5 set total balance
6.calculate new blance total
*/
//step-1
document.getElementById('btn-withdrow').addEventListener('click', function(){
    //step-2
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);
    //step-clear the input field
    withdrowField.value = '';
    if(isNaN(newWithdrowAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    //step-3
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
    
    //step-5
    const balanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    
    if(newWithdrowAmount > previousBlanceTotal){
        alert('You have not enough Money');
        return;
    }
    
    //step-4
    const currentWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotalElement.innerText = currentWithdrowTotal;
    //step-6
    const newCurrentBlance = previousBlanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newCurrentBlance;
    
});