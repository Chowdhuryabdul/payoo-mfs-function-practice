document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber = document.getElementById('phonenumber-id').value ;
    const passWord = document.getElementById('password-id').value;
    // console.log(phoneNumber, passWord);
    if(phoneNumber === '405' && passWord === '1234'){
        console.log('You are logged in and directed to the homepage');
        window.location.href = './home.html'
    }else{
        alert ('Your phonenumber or password is incorrect')
    }
})