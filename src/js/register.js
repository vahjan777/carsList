import Language from "./lang.sevice.js";

const registerEmail = document.getElementById('registerEmail'),
    registerName = document.getElementById('registerName'),
    registerPassword = document.getElementById('registerPassword'),
    registerConfirmPassword = document.getElementById('registerConfirmPassword'),
    REGISTERFORM = document.getElementById('registerForm');

        
let language = new Language();
language.setLang();


    REGISTERFORM.addEventListener('submit', register);

    function register(e) {
        e.preventDefault();
        const item = {
            name: registerName.value,
            email: registerEmail.value,
            pass: registerPassword.value
        }
        console.log(item)
        if (!checkObjValidation()) {
            return;
        }

        if (registerPassword.value !== registerConfirmPassword.value) {
            alert('incorrectly added password');
        } else {
            let getUsers = JSON.parse(localStorage.getItem('users'));
            let newUsers = getUsers ? getUsers : [];
            newUsers.push(item);
            let userJson = JSON.stringify(newUsers);
            localStorage.setItem(`users`, userJson);
            location.assign('../index.html');
        }
    }

    function checkObjValidation() {
        if (registerName.value.length === 0
            || registerEmail.value.length === 0
            || registerPassword.value.length === 0
            || registerConfirmPassword.value.length === 0) {
            alert('please try again');
            return false;
        }
        return true;
    }
