//SCROLL EFFECT
document.addEventListener('scroll', function() {
    let dyNavBar = document.getElementById('dy-NavBar');
    let sideBarCover = document.getElementById('side-bar-cover');
    if(window.scrollY > 0) {
    dyNavBar.style.backgroundColor = '#030303';
    dyNavBar.style.borderLeft = 'none';
    dyNavBar.style.borderBottom = '0.7px solid hsla(0, 0%, 93%, 0.203)';
    sideBarCover.style.borderTop = '0.7px solid hsla(0, 0%, 93%, 0.203)';
    }
    else {
    dyNavBar.style.backgroundColor = 'transparent';
    dyNavBar.style.borderLeft = '0.7px solid hsla(0, 0%, 93%, 0.203)';
    dyNavBar.style.borderBottom = 'none';
    sideBarCover.style.borderTop = 'none';
    }
})

//HOVER EFFECT
document.querySelectorAll(".song").forEach(song => {
  const number = song.querySelector(".number-text");
  const time   = song.querySelector(".time");
  const like   = song.querySelector(".like");
  const dislike= song.querySelector(".dislike");
  const dots   = song.querySelector(".fb-ellipsis");

  // store originals once
  const numberText = number?.textContent;
  const timeText   = time?.textContent;

  song.addEventListener("mouseenter", () => {
    if (number) number.innerHTML = '<i class="fa-solid fa-play"></i>';

    if (time) time.innerHTML = '<input type="checkbox">';
    [like, dislike, dots].forEach(el => el && (el.style.opacity = "1"));
  });

  song.addEventListener("mouseleave", () => {
    if (number) number.textContent = numberText;

    if (time) time.textContent = timeText;

    [like, dislike, dots].forEach(el => el && (el.style.opacity = "0"));
  });
});

//MUSIC PLAYER LOGIC
const songs = document.querySelectorAll(".song");
const allAudios = document.querySelectorAll("audio");

function toggleAudio(currentAudio) {
  if (currentAudio.paused) {
    allAudios.forEach(audio => {
      if (audio !== currentAudio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    currentAudio.play();
  } else {
    currentAudio.pause();
  }
}

songs.forEach(song => {
  song.addEventListener("click", () => {
    const id = song.dataset.id;
    const audio = document.querySelector(`audio[data-id="${id}"]`);
    console.log(`Song ${id} clicked`);
    toggleAudio(audio);
  });
});
