const openCarList = document.getElementById('openCarList'),
    openAddCar = document.getElementById('openAddCar');

    openAddCar.addEventListener('click', ()=> {
        location.assign('../addNewCar/addNewCar.html');
    });

    openCarList.addEventListener('click', ()=> {
        location.assign('../carsList/carsList.html');
    });