const form = document.querySelector(".form");
const userName = document.querySelector('#name');

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
});
