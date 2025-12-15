let buttonEl = document.getElementById("incrementBtn");

function clickBtn() {
    let numberEl = document.getElementById("counterValue");
    numberEl.style.color = "#c20a72";
    let firstNumber = numberEl.textContent;
    let updateNumber = parseInt(firstNumber) + 1;
    numberEl.textContent = updateNumber;
    let stringedNumber = JSON.stringify(updateNumber);
    localStorage.setItem("clickCount", stringedNumber);
    let parsedNumber = localStorage.getItem("clickCount");
    if (parsedNumber === null) {
        firstNumber = 0;
    } else {
        firstNumber = JSON.parse(parsedNumber);
    }

}
