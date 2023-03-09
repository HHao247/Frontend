

checkAuth();

const btnName = document.getElementById('name')
const btnSdt = document.getElementById('sdt')
const btnAddress = document.getElementById('address')
const btnSubmit = document.getElementById('capnhatthongtin')

const token = localStorage.getItem(FRONTEND_ACCESS_TOKEN);
btnSubmit.addEventListener('click', () => {
    const data = {
        name: btnName.value.trim(),
        phone: btnSdt.value.trim(),
        address: btnAddress.value.trim(),
    }

    fetch(`${BASE_URL}auth/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
})

