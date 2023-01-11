'use strict';



const getData = () => {
    fetch('db.json').then(res => res.json())
    .then(data => {
        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
        .then(data => {
            console.log(data);
        });
    });
};

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(res => res.json());
};


getData();














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