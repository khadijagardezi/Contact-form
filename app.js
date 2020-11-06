const sendBtn = document.getElementById('send');
const resetBtn = document.getElementById('reset');
const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetBtn.addEventListener('click', function(){
    let name = document.getElementById('name');
    let email  = document.getElementById('email');
    let message = document.getElementById('message');

    name.value  = '';
    email.value  = '';
    message.value  = '';

})
sendBtn.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name = name.value;
    localStorage.setItem('name', name);
   console.log(name);
    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('msg', message);
})