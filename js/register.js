checkAuth();


const btnName = document.getElementById('name')
const btnEmail = document.getElementById('email')
const btnPhone = document.getElementById('phone')
const btnPassword = document.getElementById('password')
const btnAddress = document.getElementById('message')
const btnSubmit = document.getElementById('btn-Submit')

btnSubmit.addEventListener('click', () => {
  const data = {
    name: btnName.value,
    email: btnEmail.value,
    password: btnPassword.value,
    address: btnAddress.value,
    phone: btnPhone.value,
  }

  console.log(data);

  fetch(`${BASE_URL}users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // fetch(`${BASE_URL}auth/login`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email: data.email,
      //     password: data.password
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((res) => {
      //     localStorage.setItem(FRONTEND_ACCESS_TOKEN, res.access_token);
      //     window.location.href = 'index.html';
      //   });
      login({
        email: data.email,
        password: data.password,
      });
    });
})


