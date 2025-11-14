let login = document.getElementById('login');
let signup = document.getElementById('signup');
let loginbox =document.getElementById('logBox');
let SignBtn = document.getElementById('Sign');
let LoginBtn =document.getElementById('Log');
let msg = document.getElementById('message');
let Msg = document.getElementById('Message');


login.addEventListener('click', LogBox);
function LogBox() {
    document.getElementById('logBox').style.display = 'block';
    document.getElementById('signbox').style.display = 'none';
}
signup.addEventListener('click', SignBox);
function SignBox() {
    document.getElementById('logBox').style.display = 'none';
    document.getElementById('signbox').style.display = 'block';
};

SignBtn.addEventListener('click', SIGN);
function SIGN() {
  let signName = document.getElementById('Name').value;
  let signEmail = document.getElementById('email').value;
  let signPassword = document.getElementById('Password').value;
  
  if(!signName || !signEmail || !signPassword ) {
      msg.innerHTML = "You Most Fill The Inputs";
      msg.style.color = 'red';
      
  }else {
    signName = localStorage.setItem('uName', signName);
    signEmail = localStorage.setItem('uEmail', signEmail);
    signPassword = localStorage.setItem('uPassword', signPassword);
    msg.innerHTML = 'Account Created Successfully✔️, And you will be redirect to login....';
    msg.style.color = 'green';
  
  setTimeout(() => {
      document.getElementById('logBox').style.display = 'block';
    document.getElementById('signbox').style.display = 'none';
  }, 2000);
}
}
LoginBtn.addEventListener('click', LOGIN);
function LOGIN() {
   let loginName = document.getElementById('name').value;
   let loginPassword = document.getElementById('password').value;
  
  lname = localStorage.getItem('uName');
  lemail = localStorage.getItem('uEmail');
  lpassword = localStorage.getItem('uPassword');
  
  if((loginName === lname || loginName === lemail) && loginPassword === lpassword) {
     Msg.innerHTML = 'Login successfully✔️ you will be redirect to Dashboard...';
     Msg.style.color = 'green';
     
     // After login success
localStorage.setItem('currentUser', lname);
localStorage.setItem('isLoggedIn', 'true');
   // redirect to dashboard 
   
   setTimeout(() => {
       window.location.href = 'Dashboard/index.html';
   }, 2000);
  }else {
    Msg.innerHTML = 'Invalid Username or Password❌' ;
    Msg.style.color = 'red'; 
  }
}
let gotosign = document.getElementById('gosign');
gotosign.onclick = () => {
   setTimeout(() => {
     document.getElementById('logBox').style.display = 'none';
    document.getElementById('signbox').style.display = 'block';  
   }, 2000) 
};

let gotologins = document.getElementById('gologin');
gotologins.onclick = () => {
     setTimeout(() => {
      document.getElementById('logBox').style.display = 'block';
    document.getElementById('signbox').style.display = 'none';   
     }, 2000)         
};

