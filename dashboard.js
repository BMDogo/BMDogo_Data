const currentUser = localStorage.getItem('currentUser');
const logged = localStorage.getItem('isLoggedIn');

if(logged === 'true') {
   document.getElementById('welcome').textContent = `Welcome Back ${currentUser}!!!`;
}else {
setTimeout(() =>{
   window.location.href = '../index.html';
   },300);
   };
let logout = document.getElementById('logout');
logout.addEventListener('click', Out);
function Out() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1000)
}
