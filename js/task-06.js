const textInput = document.querySelector("#validation-input");
const countValue = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === countValue) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});