
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

// google login

window.onSignIn = function (googleUser) {
    let profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    location.assign('menu/menu.html');
}

//facebook login

window.fbAsyncInit = function () {
    FB.init({
        appId: '327039928505307',
        cookie: true,
        xfbml: true,
        version: 'v8.0'
    });

    FB.AppEvents.logPageView();
    window.logoutFb = FB.logout;

    window.checkLoginState = function (res) {
        const { userID,access_token } = FB.getAuthResponse();
        // let h = {
        //     accessToken: "EAAEpcOrEE9sBAELPukyThsIHKLtcuWjwxRgsm47GDuaQP8fP5hqjDGZBvIhFbgIVq7YZBrX9r1F4EjS8ZCrW5XfaoZBFwgQsutqClZAHKGs2lYyP3QDsUcScf1lXkhJplxCFmK5txQCvJjoIWZCIsYzkG79XmEV8lWREUXSdFiW579IWZBxlhloeHScw5C6oSTDsMbBhzFV2W3DzYNZCwOnvlpE1ZBDtFmmcZD",
        //     data_access_expiration_time: 1607513016,
        //     expiresIn: 5784,
        //     graphDomain: "facebook",
        //     signedRequest: "N1WWZ9UQhSmZbpkbUhvBc-AlgILxrWOrec12EYR6sq8.eyJ1c2VyX2lkIjoiMzI3MjMyNTAxOTQ2OTQ0NSIsImNvZGUiOiJBUUEwMk4wTXpTOWRNWmZUVXpBcG8xdWx2UHBqd2pSTFR3Qy00ZGxsV0pITm4xb2xjd3BVbFNTYl95bm1rZk9HMzRYTmtuWG9qUVFVNHZ2UGJqbnBLS0FRbEhNdUt2OGhBZFhMNU9kX3ZOSEtsTkZsMU5LTjhPNlVpOEl0b05xTGxjRTdVTVpwZ0ZENXpfMlNpRDdJU082S0NUZnRlalRxbzJGMkhmTmx3MGNLZE1EdFJOUlF1X3lTb3ZqZDA1VWUtcWxwUmJIMjB4a3VlaU1Ld3hGUFBHRENLUDc0ekF4ck1FSUlzLUxNMUg1QnlLSGV6ajYwUWZlTjA5Y3ljbG51c0NXV3JwX2Y3aXBsWkt0UHBBWi0xVFZZTUpPSGJET192ckFYZ2FpSDlUSnh2b3VKVnp6ck0xYlhWb3Z0WkVvczR5LS1LV2dWYWxTLS1DeW50a0VJLU81MV9wallRRGVjQUhENkp5bGN0VHRXZUEiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTU5OTczNzAxNn0",
        //     userID: "3272325019469445",
        // }
        

        FB.api('/me', 'get', { access_token, fields: 'id,name,last_name,first_name,picture' }, function(response) {
            document.getElementById("img").src = "https://graph.facebook.com/"+response.id+"/picture";
        });


        document.location = 'menu/menu.html'

    }

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



