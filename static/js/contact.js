const messageError = document.querySelector(".message-error");
const btnContact = document.querySelector("#btn-contact");

const verificaForm = (name, mail) => {
  if ((!name) || (!mail)) {
    messageError.innerText = "Son necesarios los datos de nombre y correo";
    messageError.classList.remove("hidden");
  } else {
    messageError.classList.add("hidden");
  }
};

btnContact.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let message = document.getElementById("message").value;

  verificaForm(name, mail);
});
