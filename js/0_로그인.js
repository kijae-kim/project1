// import * as authRepository from '../data/auth.js';

// 고객과 상담사 선택기능
const clientButton = document.getElementById('client');
const counselorButton = document.getElementById('counselor');
const hidden = document.getElementById('hidden');
const loginform = document.getElementById('loginform')

clientButton.addEventListener('click', function () {
        counselorButton.classList.add('non-select');
        this.classList.remove('non-select');
        counselorButton.disabled = false;
        this.disabled = true;
        localStorage.setItem('userType', 'client');
        loginform.action = '/client/login'
});

counselorButton.addEventListener('click', function () {
        clientButton.classList.add('non-select');
        this.classList.remove('non-select');
        clientButton.disabled = false;
        this.disabled = true;
        localStorage.setItem('userType', 'counselor');
        loginform.action = '/counselor/login'
});




// async function fetchData() {
//         try {
//                 let choice = ''
//                 if (!clientButton.classList.contains('non-select')) {
//                         choice = 'client';
//                 } else { choice = 'counselor' }

//                 const response = await fetch(`http://localhost:8080/${choice}/error`);
//                 const data = response.json()
//                 const err = document.getElementById('error')
//                 if (data == 'error') {
//                         err.style.opacity = 1
//                 } else{err.style.opacity = 0}
//         } catch (err) {
//                 console.error('Error fetching data:', err);
//         }
// }

// fetchData();