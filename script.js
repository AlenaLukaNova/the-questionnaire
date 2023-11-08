const form = document.querySelector(".form");
const userName = document.querySelector('#name');
const secondName = document.querySelector('#secondName');
const userMail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const agree = document.querySelector('#agree');
const button = document.querySelector('#button');
const clear = document.querySelector('#clear');



form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();
  fetch(`https://polinashneider.space/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: `${userName}`,
      secondName: `${secondName}`,
      email: `${userMail}`,
      phone: `${userPhone}`,
      agree: `${agree}`
    }),
  })

    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      alert("Поздравляю с успешной регистрацией!");
      form.reset();
    })
    .catch((error) => {
      alert("К сожалению, произошла ошибка!");
    });
  });
