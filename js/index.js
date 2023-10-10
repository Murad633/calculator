const display = document.querySelector(".display");
        const buttons = document.querySelectorAll("button");
        let input = "";

        function calculateExpression(expression) {
            try {
                return parseFloat(eval(expression).toFixed(9));
            } catch (error) {
                return "Error";
            }
        }

        function updateDisplay() {
            display.innerHTML = input;
        }

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const val = button.value;
                switch (val) {
                    case "AC":
                        input = "";
                        break;
                    case "=":
                        input = calculateExpression(input);
                        break;
                    case "%":
                        input = (input/100)*input;
                        break;
                    case "+/-":
                        input = input* -1;
                        break;
                    default:
                        input += val;
                        break;
                }
                updateDisplay();
            });
           
        });

        document.addEventListener("keydown", (event) => {
            const keyName = event.key;
            for (let i = 0; i <= 9; i++) {
                if (keyName === i.toString()) {
                    input += i.toString();
                    updateDisplay();
                    return;
                }
            }
            switch(keyName) {
                case "Backspace":
                    input = input.slice(0, -1);
                    updateDisplay();
                    return;
                // case "Control" && "Backspace":
                //     input = " ";
                //     updateDisplay();
                //     return;
                case "C": case "c":
                    input = "";
                    updateDisplay();
                    return;
                case ".":
                    input += ".";
                    updateDisplay();
                    return;
                case "+": case "-": case "*": case "/":
                    input += keyName;
                    updateDisplay();
                    return;
                case "%":
                    input = (input/100)*input;
                    updateDisplay();
                    return;
                case "=":
                case "Enter":
                    try {
                        input = parseFloat(eval(input).toFixed(9));
                        updateDisplay();
                    } catch (error) {
                        input = "Error";
                        updateDisplay();
                        }
                    return;
            }
        });