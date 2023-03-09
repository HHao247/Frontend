

const btnEmail = document.getElementById('nemail')
const btnPassword = document.getElementById('npassword')
const btnSubmit = document.getElementById('submitdangnhap')

btnSubmit.addEventListener('click', () => {
    const data = {
        email: btnEmail.value,
        password: btnPassword.value,
    }
    // if (data.email == "" || data.password == "") {
    //     console.log("khong duoc de trong");
    // }else{
    //     login(data);
    //     showToast("Đăng nhập thành công");
    // }
    login(data);
    
    // fetch(`${BASE_URL}auth/login`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then((response) => response.json())
    //     .then((res) => {
    //         localStorage.setItem(FRONTEND_ACCESS_TOKEN, res.access_token);
    //         window.location.href = 'index.html'
    //     });
})

