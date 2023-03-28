let isPlaying = false;
let failSound = new Audio("./no-please.mp3");
let sucessSound = new Audio("./radost.mp3");
let currentSong;
let London = document.querySelector("#option3");
let container = document.querySelector(".option-container");
container.addEventListener("click", (event) => {
    console.log(event.target.id);
    let clickedId = event.target.id;
    if (event.target.id === "option3") {
        if (isPlaying === true) {
            currentSong.pause();
            currentSong.currentTime = 0; //ostanovit pesnu i peremataet na na4alo,esli 0

        }
        London.style.background = "rgb(191, 241, 188)";

        setTimeout(function () {
            London.style.background = "rgb(184, 239, 230)";

        }, 4000);
        sucessSound.play();
        isPlaying=!isPlaying;
        currentSong = sucessSound;

    } else {
        if (isPlaying === true) {
            currentSong.pause();
            currentSong.currentTime = 0;


        }
        document.querySelector(`#${clickedId}`).style.background = "rgb(242, 97, 97)";

        setTimeout(function () {
            document.querySelector(`#${clickedId}`).style.background = "rgb(184, 239, 230)";

        }, 10000);
        failSound.play();
        isPlaying=!isPlaying;
        currentSong = failSound;
    }
})
