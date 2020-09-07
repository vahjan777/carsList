const addBrand = document.getElementById('addBrand');
const addDate = document.getElementById('addDate');
const addTransmission = document.getElementById('addTransmission');
const addModel = document.getElementById('addModel');
const addClass = document.getElementById('addClass');
const addHP = document.getElementById('addHP');
const createNewCar = document.getElementById('createNewCar');
const formAddWindow = document.getElementById('formAddWindow');

formAddWindow.addEventListener('submit', createNew);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const cars = JSON.parse(localStorage.getItem('cars'));

if (id != null && id != undefined) {
    // edit process
    let carObject = cars.find(x => x.id == parseInt(id));

    addBrand.value = carObject.Brand;
    addDate.value = carObject.Date;
    addTransmission.value = carObject.Transmission;
    addModel.value = carObject.Model;
    addClass.value = carObject.Class;
    addHP.value = carObject.Horsepower;

    document.getElementById('createNewCar').innerText = 'Edit';
}

function resetValueAdd() {
    addBrand.value = '';
    addDate.value = '';
    addTransmission.value = '';
    addModel.value = '';
    addClass.value = '';
    addHP.value = '';
}

function createNew(e) {
    e.preventDefault();
    if(id == null || id == undefined) {
        const newCarObj = {};
        newCarObj.Brand = addBrand.value;
        newCarObj.Date = addDate.value;
        newCarObj.Transmission = addTransmission.value;
        newCarObj.Model = addModel.value;
        newCarObj.Class = addClass.value;
        newCarObj.Horsepower = addHP.value;
        newCarObj.id = Math.floor(Math.random() * 999999);
        console.log(newCarObj);

        cars.unshift(newCarObj);
    }
    else
    {
        let carObjectIndex = cars.findIndex(x => x.id === parseInt(id));
        cars[carObjectIndex].Brand = addBrand.value;
        cars[carObjectIndex].Dare = addDate.value;
        cars[carObjectIndex].Transmission = addTransmission.value;
        cars[carObjectIndex].Model = addModel.value;
        cars[carObjectIndex].Class = addClass.value;
        cars[carObjectIndex].Horsepower = addHP.value;
    }
    resetValueAdd();

    localStorage.setItem('cars', JSON.stringify(cars));
    location.assign('../carsList/carslist.html');
}