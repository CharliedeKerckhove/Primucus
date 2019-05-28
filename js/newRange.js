//Advert
function check() {
/*collect adverts*/
  var adverts = document.getElementsByClassName("adverts");
/*randomly generate number between 0 and array length*/
  var num = Math.floor(Math.random() * adverts.length);
  var storedAd = localStorage.getItem("ad");
/*hide all images*/
  for (var i = 0; i < adverts.length; i++) {
    adverts[i].style.display = "none";
  }
/*check local storage for last number if its the same as randomly generated number regenerate number and repeat util new number*/
  if (storedAd == num) {
  console.log("repeated advert");
    var num = Math.floor(Math.random() * adverts.length);
    check();
  } else {
    adverts[num].style.display = "block";
    localStorage.setItem("ad", num);
    console.log("new advert");
  }
}
check();
//Audio
var music = document.getElementById("music");
var duration;

music.addEventListener("timeupdate", updateSeekbar, false);
playaudio.addEventListener("click", playAudio);
volaudio.addEventListener("click", muteVolume);
seekbaraudio.addEventListener("change", seekVid);
seekbaraudio.addEventListener("mousedown", vidPause);
seekbaraudio.addEventListener("mouseup", vidPlay);
volumeBar.addEventListener("change", changeVolume);

function playAudio(){
    if (music.paused){
        music.play();
        playaudio.innerHTML = '<i class="material-icons">pause</i>';
    } else {
        music.pause();
        playaudio.innerHTML = '<i class="material-icons">play_arrow</i>';
    }
}
//Mute Button
function muteVolume() {
  if (music.muted) {
    music.muted = false;
    volaudio.innerHTML = '<i class="material-icons">volume_up</i>';
  } else {
    music.muted = true;
    volaudio.innerHTML = '<i class="material-icons">volume_off</i>';
  }
}
function seekVid() {
  var slideto = music.duration * (seekbaraudio.value / 100);
  music.currentTime = slideto;
}
function updateSeekbar() {
  //duration bar
  var newtime = music.currentTime * (100 / music.duration);
  seekbaraudio.value = newtime;
  //duration numbers    
  var curmins = Math.floor(music.currentTime / 60);
  var cursecs = Math.floor(music.currentTime - curmins * 60);
  var durmins = Math.floor(music.duration / 60);
  var dursecs = Math.floor(music.duration - durmins * 60);

  if (cursecs < 10) {
    cursecs = "0" + cursecs;
  }
  if (dursecs < 10) {
    dursecs = "0" + dursecs;
  }
  if (curmins < 10) {
    curmins = "0" + curmins;
  }
  if (durmins < 10) {
    durmins = "0" + durmins;
  }
  curtimetext.innerHTML = curmins + ":" + cursecs;
  durtimetext.innerHTML = durmins + ":" + dursecs;
}
//Pause Function
function vidPause() {
  music.pause();
  playaudio.innerHTML = '<i class="material-icons">play_arrow</i>';
}

function vidPlay() {
  music.play();
  playaudio.innerHTML = '<i class="material-icons">pause</i>';
}
//Volume Bar
function changeVolume() {
  music.volume = volumeBar.value;
}