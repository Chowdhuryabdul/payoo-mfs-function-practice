document.getElementById('add-money-btn-show').addEventListener('click', function(event){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add ('hidden')
    document.getElementById('transaction-section-form').classList.add('hidden')
    document.getElementById('bonus-form').classList.add('hidden')
})

document.getElementById('cash-out-btn-show').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('transaction-section-form').classList.add('hidden')
    document.getElementById('bonus-form').classList.add('hidden')
})

document.getElementById('trasaction-history-btn').addEventListener('click', function(){
    document.getElementById('transaction-section-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('bonus-form').classList.add('hidden')
})

document.getElementById('Bonus-btn-show').addEventListener('click', function(){
    document.getElementById('bonus-form').classList.remove('hidden');
     document.getElementById('add-money-form').classList.add('hidden')
     document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-section-form').classList.add('hidden')
})