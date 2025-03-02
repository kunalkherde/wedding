let soundIcon = document.getElementById("sound-icon");
let soundOn = true;

function toggleSound() {
  if (soundOn) {
    soundIcon.classList.remove("sound-on");
    soundIcon.classList.add("sound-off");
    // You can add logic here to mute the sound
    // For example: audioElement.muted = true;
  } else {
    soundIcon.classList.remove("sound-off");
    soundIcon.classList.add("sound-on");
    // You can add logic here to enable the sound
    // For example: audioElement.muted = false;
  }
  soundOn = !soundOn;
}
