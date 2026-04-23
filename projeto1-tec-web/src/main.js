const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  const nameError = document.getElementById("name-required");
  const emailError = document.getElementById("email-required");
  const phoneError = document.getElementById("phone-required");

  const formInfo = document.getElementById("form-info");

  let hasError = false;

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "O campo nome é obrigatório.";
    hasError = true;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "O campo email é obrigatório.";
    hasError = true;
  }

  if (phone.value.trim() === "") {
    phoneError.textContent = "O campo telefone é obrigatório.";
    hasError = true;
  }

  if (hasError) return;

  const newContact = {
    name: name.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
  };

  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  storedData.push(newContact);

  localStorage.setItem("data", JSON.stringify(storedData));

  formInfo.textContent = "Contato cadastrado com sucesso!";
  setTimeout(() => {
    formInfo.textContent = "";
  }, 3000);

  form.reset();
});
