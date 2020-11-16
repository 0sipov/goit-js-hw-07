const nameInputRef = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInputRef.addEventListener("input", function () {
    nameInputRef.value.length === 0 ? nameOutput.textContent = "незнакомец" : nameOutput.textContent = nameInputRef.value;
})