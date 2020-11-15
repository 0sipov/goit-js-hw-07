
const buttons = document.querySelectorAll("[data-action]");
const spanRef = document.getElementById("value");

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        const action = this.getAttribute("data-action");
        
        let value = Number(spanRef.textContent);
        
        action === "increment" ? value += 1 : value -= 1;
        spanRef.textContent = value;
        
    })    
})
