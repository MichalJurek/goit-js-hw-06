const fontSizeChange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
// input działa płynniej niż change // 
fontSizeChange.addEventListener("input", (event) => {
    text.style.fontSize = fontSizeChange.value + "px"
});