var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
//co the nhu vay
var progressSpan = progress.querySelector("span");
//yeu cau chuyen doi het thanh %
var isDrag = false;
var initialClientX;
var initialValue = 0;
var value = 0;
//tinh do dai cua progress bar
var progressBarWidth = progressBar.clientWidth;
// console.log(progressBarWidth);//400px

// update do dai cua progress
var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    // console.log(e.target);
    var offsetX = e.offsetX;
    value = (offsetX / progressBarWidth) * 100;
    handleUpdateValue(value);
    // console.log(offsetX);
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
    // console.log(initialValue);
  }
});
progressSpan.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
    // console.log(initialClientX);
  }

  e.stopPropagation();
});
document.addEventListener("mousemove", function (e) {
  //   if (isDrag) console.log("dang keo");
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth / progressBarWidth) * 100;
    value = initialValue + value;
    if (value <= 0) value = 0;
    if (value >= 100) value = 100;
    handleUpdateValue(value);
  }
});
document.addEventListener("mouseup", function () {
  isDrag = false;
  initialValue = value;
});
//xay dung trinh phat nhac
var audio = document.querySelector(".audio");
// console.log(audio);
//viet ham chuyen doi second thanh minute
var getTime = function (seconds) {
  //giay=> phut va giay
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);
  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
var playBtn = document.querySelector(".play-btn");
var durationTime = progressBar.nextElementSibling;
var currentTime = progressBar.previousElementSibling;
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;
//lang nghe su kien load  xong nhac
audio.addEventListener("loadeddata", function () {
  durationTime.innerText = getTime(audio.duration);
});
playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  currentTime.innerText = getTime(audio.currentTime);
  //lay ra ti le % dua vao currentTime va durations
  var value = (audio.currentTime / audio.duration) * 100;
  //   console.log(value);
  handleUpdateValue(value);
});
