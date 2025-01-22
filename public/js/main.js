const button = document.getElementById("toggler");
const punchline = document.getElementById("punchline");

button.addEventListener("click", event => {
    if (punchline.style.visibility === "hidden") {
        punchline.style.visibility = "visible";
        button.textContent = "Hide";
    } else {
        punchline.style.visibility = "hidden";
        button.textContent = "Punchline";
    }
});