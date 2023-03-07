const fontSizeChange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeChange.addEventListener("change", (size) => {
    text.style.fontSize = `${size.target.value}px`;
});