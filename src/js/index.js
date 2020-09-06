
const REGISTRBUTTON = document.getElementById('registrButton'),
    loginName = document.getElementById('loginName'),
    loginPassword = document.getElementById('loginPassword'),
    LOGINBUTTON = document.getElementById('loginButton')

LOGINBUTTON.addEventListener('click', (e)=> {  
    e.preventDefault();
if (loginName.value.length === 0
    || loginPassword.value.length === 0) {
    alert('Incorrect username or password');
}
let getLogin = {
    name : loginName.value,
    pass : loginPassword.value,
};
let getUsers = JSON.parse(localStorage.getItem('users'));
for (let el of getUsers) {
    if (getLogin.name === el.name || getLogin.name === el.email) {
        if (getLogin.pass === el.pass) {
            console.log('aaa')
            location.assign('./menu/menu.html');
            break;
        } else {
            alert('Incorrect password');
            break;
        }
    } else {
        alert('No such user');
    }
}
})

REGISTRBUTTON.addEventListener('click', (e)=> {
    location.assign('register/register.html');
})