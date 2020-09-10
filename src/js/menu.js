const openCarList = document.getElementById('openCarList');
const openAddCar = document.getElementById('openAddCar');
const LOGOUT_BTN= document.getElementById("logOut");



    openAddCar.addEventListener('click', ()=> {
        location.assign('../addNewCar/addNewCar.html');
    });

    openCarList.addEventListener('click', ()=> {
        location.assign('../carsList/carsList.html');
    });



    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
    // LOGOUT_BTN.addEventListener("click",signOut)

    function signOut() {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
          location.pathname = "/src/index.html"
        });
      };

