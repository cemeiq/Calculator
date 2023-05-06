const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')
let screenList = []
let concatString = ""


function calculate() {
    console.log('caculating')
}


buttons.forEach(button => {
    button.addEventListener('click', event => {
        // Do something when a button is clicked
        screenDisplay.textContent = ""
        const btnText = button.textContent

        if (btnText == 'CLEAR') {
            screenList = []
            screenDisplay.textContent = ""
        }

        else if (btnText === '=') {
            screenDisplay.textContent = eval(concatString)
        }

        else {
            screenList.push(btnText)
            concatString = screenList.join("")
            //   console.log(screenList)
            screenDisplay.textContent += concatString
        }



    });
});


// const calculator = (num1, num2, operator) => {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         return num1 / num2;
//       default:
//         return 'Invalid operator';
//     }
//   };
