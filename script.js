const allDrums = document.querySelectorAll(".drum")

for (let i = 0; i < allDrums.length; i++) {
    allDrums[i].onclick = () => {
        new Audio(`sounds/${allDrums[i].value}.mp3`).play();
    }
}

document.addEventListener("keypress", keyPressed);

function keyPressed(event) {
    let keyValue = event.key
    new Audio(`sounds/tom-${keyValue}.mp3`).play();

    const activeButton = document.querySelector("." + keyValue)

    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 500);
}