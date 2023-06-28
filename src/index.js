function removeTransition (e) {
  console.log(e)

  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');

}

let currentAudio = null

function play (e) {

  if (currentAudio) {
    currentAudio.pause(); // Pause the currently playing audio
    currentAudio.currentTime = 0; // Reset the current time to start from the beginning
    currentAudio = null; // Clear the reference to the previous audio element
  }

  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!audio) return //stops the code from running
  audio.currentTime = 0 // rewinds it to the start

  audio.play()

  key.classList.add ("playing")

  currentAudio = audio
}

let sounds = document.querySelectorAll(".sounds");
sounds.forEach(sounds => sounds.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", play)