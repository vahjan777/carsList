
const REGISTRBUTTON = document.getElementById('registrButton'),
    loginName = document.getElementById('loginName'),
    loginPassword = document.getElementById('loginPassword'),
    LOGINBUTTON = document.getElementById('loginButton'),
    lngSelect = document.getElementById('lngSelect');

LOGINBUTTON.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginName.value.length === 0
        || loginPassword.value.length === 0) {
        alert('Incorrect username or password');
    }
    let getLogin = {
        name: loginName.value,
        pass: loginPassword.value,
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

REGISTRBUTTON.addEventListener('click', (e) => {
    location.assign('register/register.html');
})

//lng

const select = document.getElementById('lngSelect'),
    translateControls = document.querySelectorAll('[data-localize]'),
    localObj = { arm: null, rus: null, eng: null };
let translate = null;

loadTranslate(select.value);
select.onchange = (event) => loadTranslate(event.target.value);

function loadTranslate(locale) {
    if (!localObj[locale]) {
        localObj[locale] = true;
        import(`../Jsons/${locale}.js`).then(locale => {
            translate = locale.default;
            translateControls.forEach(tag => {
                tag.innerHTML = translate[tag.dataset.localize];
            })
        })
        localObj[locale] = null;
        localStorage.setItem('lang', locale);
    }
}

window.onSignIn = function (googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    location.assign('menu/menu.html')
}
