const requestURL = "https://jsonplaceholder.typicode.com/users";

// Получаем форму и добавляем к ней обработчик события submit
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(requestURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting form");
      }
    })
    .catch((error) => {
      console.error("Error submitting form", error);
    });
}

const formFooter = document.getElementById("form__footer");
formFooter.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formFooter);

  try {
    const response = await fetch(requestURL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

const formz = document.querySelector("form");
formz.addEventListener("submit", (e) => {
  e.preventDefault(); // отменяем стандартное поведение отправки формы
  formz.reset(); // сбрасываем значения полей формы
});

const formFooterz = document.querySelector("#form__footer");
formFooterz.addEventListener("submit", (e) => {
  e.preventDefault();
  formFooterz.reset();
});
