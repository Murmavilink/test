'use strict';


const myHeaders = new Headers();
myHeaders.append("apikey", "CZH8qJealtsViSl2N9NicLvlEKNRirA7");
const inputAmount = document.getElementById('input');
const form = document.getElementById('form');
const spinner = document.getElementById('spinner');

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

const getResult = () => {
    const amount = inputAmount.value;
    const fromValue = document.getElementById('from').value;
    const toValue = document.getElementById('to').value;
    const resultInput = document.getElementById('result');
    if (!amount) {
        spinner.style.display = "none";
        return;
    }

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toValue}&from=${fromValue}&amount=${amount}`,
        requestOptions)
        .then(response => response.json())
        .then(result => {
            spinner.style.display = "none";
            resultInput.value = (result.result).toFixed(2);
        })
        .catch(error => console.log('error', error));
};

inputAmount.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/g, '');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        spinner.style.display = "inline-block";
        getResult();
    } catch (error) {
        console.log(error.message);
    }

});


















// const list = document.getElementById('list');
// const selectCars = document.getElementById('cars');

// let carsObj = {};


// const showCar = (car) => {
//     const elementOne = document.createElement('li');
//     const elementTwo = document.createElement('li');

//     elementOne.textContent = `Тачка ${car.brand} ${car.model}`;
//     elementTwo.textContent = `Цена: ${car.price}`;
//     list.append(elementOne);
//     list.append(elementTwo);
// };

// selectCars.addEventListener('change', () => {
//     const option = selectCars.options[selectCars.selectedIndex];
//     list.innerHTML = '';

//     if(option.value === 'bmw') {
//         // let id = selectCars.selectedIndex - 1;
//         showCar(carsObj[selectCars.selectedIndex - 1]);
//     } else if(option.value === 'volvo') {
//         showCar(carsObj[selectCars.selectedIndex - 1]);
//     }

// });


// const getCars = (url) => {
//     return fetch(url).then(res => res.json());
// };


// getCars('cars.json').then(data => {
//     carsObj = data.cars;
// }).catch(error => {
//     console.dir(error.message);
// });

    


























// const getData = async (id) => {

//     try {
//         const responseUsers = await fetch('./db.json');
//         const users = await responseUsers.json();
//         const responseUser = await fetch(`${users[id].id}.json`);
//         return await responseUser.json();
//     } catch(error) {
//         throw new Error('Какая то ошибка!');
//     }

   
// };

// getData(10).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error.message);
// });


























// const getData = () => {
//     return fetch('db.json').then(res => res.json());
// };


// getData().then(users => {
//     const userId = users[1].id;

//     fetch(`${userId}.json`)
//     .then(res => res.json())
//     .then(user => console.log(user))
// });














// const form = document.getElementById('form');
// const name = document.getElementById('text');
// const pass = document.getElementById('number');

// const sendData = (url, data) => {
//     return fetch(url, {
//         method: 'POST',
//         body: data,
//         headers: {
//             'Content-type': 'multipart/form-data',
//         },
//     }).then(res => res.json());
// };

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const data = new FormData(form);

// sendData('https://jsonplaceholder.typicode.com/posts', data)
//     .then(data => {
//         console.log(data);
//     });

// });








// const user = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// });

// user.then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log(error);
//     });