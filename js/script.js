function init() {
    let button = document.getElementById("entrybutton");

    button.addEventListener("click", function() {
        let userText = document.getElementById("entryinput").value;
        alert("Ana Lorenzo: " + userText);

        document.getElementById("textoutput").textContent = userText;
    });
}

window.addEventListener('load', init);
