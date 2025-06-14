document.getElementById('add-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addedAmount = document.getElementById('added-amount').value ;
    const addedAmountPin = document.getElementById('added-amount-pin').value;
    if(addedAmountPin === '1234'){
    const existingBalance = document.getElementById('existing-balance').innerText;
    const updatedBalance = parseFloat(addedAmount) + parseFloat(existingBalance)
    document.getElementById('existing-balance').innerText = updatedBalance
    
    // transaction history saction 
    const p = document.createElement('p');
    p.innerText = `Added: ${addedAmount} Tk. New Balance: ${updatedBalance}`
    document.getElementById('transaction-container').appendChild(p)

    }else{
        alert ('Your username or pin is wrong')
    }   
})