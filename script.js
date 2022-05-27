var btn = document.getElementById("btn");
var h1 = document.getElementById("h1");
var body = document.getElementById("body");
var image = document.getElementById("image");
body.style.textAlign = "center";

btn.addEventListener("click", function () {
    h1.textContent = "Happy birthday!";
    image.style.display = "block";
    btn.style.display = "none";
})