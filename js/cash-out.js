document.getElementById('withdrawn-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashedOutAmount = document.getElementById('Withdrawn-amount').value ;
    const cahsedOutPin = document.getElementById('withdrawn-amount-pin').value;
   if(cahsedOutPin === '1234'){
    console.log('pls take the money out');
    const existingAmount = document.getElementById('existing-balance').innerText;
    if(existingAmount < cashedOutAmount){
        alert ('You do not have enough balance')
        return
    }
    const updatedAmount = parseFloat(existingAmount) - parseFloat(cashedOutAmount);
    document.getElementById('existing-balance').innerText = updatedAmount

    // transaction history saction 
    const div = document.createElement('div')
    div.classList.add('bg-yellow-300')
    div.innerHTML=`
    <h4 class= "text-2xl font-bold">Cashed Out Amount</h4>
    <p>${cashedOutAmount} withdrawn and remaining Balance: ${updatedAmount}</p>
    `
    document.getElementById('transaction-container').appendChild(div)
   }else{
    alert ('Your Username or pincode is wrong')
   } 
})