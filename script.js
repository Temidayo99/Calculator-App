const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const classTarget = event.currentTarget.classList;
        
        if(classTarget.contains("number")) {
            let number = btn.textContent;
            screen.value += number;
        }
        else if(classTarget.contains("equal-to")) {
            if(screen.value === "") {
                alert("input is empty");
            } else {
                let value = eval(screen.value);
                screen.value = value;
            }
            
        }
        else if(classTarget.contains("Clear")) {
            screen.value = "";
        }
        else if(classTarget.contains("delete")) {
            screen.value = screen.value.substring(0, screen.value.length - 1);
        }
        
    });
});