const registerEmail = document.getElementById('registerEmail'),
    registerName = document.getElementById('registerName'),
    registerPassword = document.getElementById('registerPassword'),
    registerConfirmPassword = document.getElementById('registerConfirmPassword'),
    REGISTERFORM = document.getElementById('registerForm');

    const select = document.getElementById('registerForm'),
    translateControls = document.querySelectorAll('[data-localize]');
    let translate = null;
    
    let locale = localStorage.getItem('lang');

            import(`../Jsons/${locale}.js`).then(locale => {
                translate = locale.default;
                translateControls.forEach(tag => {
                    tag.innerHTML = translate[tag.dataset.localize];
                })
            })

        
    

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
