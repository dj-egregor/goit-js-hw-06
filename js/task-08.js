const formEl = document.querySelector('form.login-form');

function checkFormData(event) {
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;
  if (email === '' || password === '') {
    alert('Все поля формы должны быть заполнеы!');
  } else {
    const sendData = {
      [formEl.elements.email.name]: email,
      [formEl.elements.password.name]: password,
    };
    console.log(sendData);
    formEl.reset();
  }
  event.preventDefault();
}

formEl.addEventListener('submit', checkFormData);
