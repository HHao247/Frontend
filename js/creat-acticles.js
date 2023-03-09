

checkAuth();

ClassicEditor
  .create(document.querySelector('#content'))
  .then(newEditor => {
    editor = newEditor;
  })
  .catch(error => {
    console.error(error);
});

const btnSubmit = document.getElementById('btn-submit')
const inputTitle = document.getElementById('title')
const inputDescription = document.getElementById('description')
const inputContent = document.getElementById('content')
const inputThumb = document.getElementById('thumb')
const btnClick = document.getElementById('btn-click')
const token = localStorage.getItem(FRONTEND_ACCESS_TOKEN);



btnClick.addEventListener('click', () => {
  const id = Math.floor(Math.random() * 1000);
  inputThumb.value = `https://picsum.photos/id/${id}/1280/720`;
  document.getElementById('img').src = inputThumb.value;

});

btnSubmit.addEventListener('click', () => {

  const data = {

    title: inputTitle.value.trim(),
    description: inputDescription.value.trim(),
    content: editor.getData(),
    thumb: inputThumb.value.trim(),
    category_id: 1,
  }
  console.log(data
  );
  fetch(`${BASE_URL}articles/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log('res', res);
    })
    .catch((error) => {
      console.log(error);
    });
})


