document.getElementById('bonus-btn').addEventListener('click', function(event){
    event.preventDefault()
    const addedtoGetBonusAmount = document.getElementById('added-bonus-amount').value ;
    const addedAmountNumber = parseFloat(addedtoGetBonusAmount)
   
    const addedAmountPin = document.getElementById('bonus-pin').value;
    if(addedAmountPin === '1234'){
         if(addedAmountNumber > 500 ){
        const percentageBonus = addedAmountNumber / 10;
        // console.log(percentageBonus);
        const existingAmount = document.getElementById('existing-balance').innerText
    const updatedAmount = addedAmountNumber + percentageBonus + parseFloat(existingAmount)
    document.getElementById('existing-balance').innerText = updatedAmount
    console.log(updatedAmount);

    // add to transaction section 
    const div = document.createElement('div');
    div.classList.add ('bg-red-300')
    div.innerHTML = `
    <h2 class = "text-2xl font-bold">Award Bonus</h2>
    <p>Your bonus is tk. ${percentageBonus} and Amount with bonus tk. ${updatedAmount}</p>
    `
    document.getElementById('transaction-container').appendChild(div)
    }else{
        const existingAmount = document.getElementById('existing-balance').innerText
        const updatedAmount = addedAmountNumber + parseFloat(existingAmount);
        document.getElementById('existing-balance').innerText = updatedAmount
    }    
    }else{
        alert ('Your UserNmae or Password is wrong')
    }
})