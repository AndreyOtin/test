const btnContainer = document.querySelector('.button-container');
const value = document.querySelector("#value")
let number = 0;


btnContainer.addEventListener('click', function (e) {
    e.stopPropagation();
    const clickedButton = e.target;
    let color;
    if (clickedButton.classList.contains("decrease")) {
        number--;
    }
    else if (clickedButton.classList.contains("increase")) {
        number++;
    } else {
        number = 0;
    }

    if (number > 0) {
        color = 'red'
    }
    else if (number < 0) {
        color = "green"
    } else {
        color = "inherit"
    }

    value.textContent = number;
    value.style.color = color;
})
