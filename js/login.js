//Step-1. add click event handeler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //Step-2 Get the email address from email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value = '';
    //Step-3
    //3.a-set the id on html element
    //3.b-Get the element 
    //3.c-Get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value = '';
    //Danger: Dot Not Verify on the client side
    //Step-4 Verify email & password and check valid user or not!!!!
    if(email === 'sontan@bap.com' && password === 'ratul'){
       window.location.href = 'bank.html';
    }
    else{
        alert('Email R Password tik kore deeeeee!');
    }
});