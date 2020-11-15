const nameInputRef = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInputRef.addEventListener("input", function () {
    
    nameOutput.textContent = nameInputRef.value;
})