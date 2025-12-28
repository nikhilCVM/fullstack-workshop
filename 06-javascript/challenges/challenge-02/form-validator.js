const form = document.querySelector('form');
const input = document.querySelectorAll('input');

// const usernameText = document.getElementsByClassName('usernameText');

const user = document.getElementById('exampleInputUsername');
user.addEventListener('blur',function(){
    const userval = document.getElementById('exampleInputUsername').value;
    const userregex = /^[a-zA-Z0-9]{3,15}$/;
    if(!userregex.test(userval)){
        document.getElementById('usernameText').textContent = 'enter valid username';
        console.log(document.getElementById('usernameText'));
        document.getElementById('usernameText').style.color='red';
    }
    else{
        input.style.color= green;
        
    }
})
const email = document.getElementById('exampleInputEmail1');
email.addEventListener('blur',function(){
    const emailval = document.getElementById('exampleInputEmail1').value;
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailregex.test(emailval)){
        
         document.getElementById('emailText').textContent = 'enter valid email';
         console.log(document.getElementById('emailText'));
         document.getElementById('emailText').style.color='red';
         console.log("email worked?");
         
        }else{
            
        console.log("email didnt worked!");
        
    }
})
const Password = document.getElementById('exampleInputPassword1');
Password.addEventListener('blur',function(){
    const passwordlval = document.getElementById('exampleInputPassword1').value;
    const passwordregex = /^[a-zA-Z]{8,}$/;
    if(passwordregex.test(passwordlval)){
        document.getElementById('passwordText').textContent = 'enter valid password';      
        document.getElementById('passwordText').style.color='red';
        
        
        console.log("password worked?");
    }else{
        console.log("password didnt worked!");
            }
            
})


