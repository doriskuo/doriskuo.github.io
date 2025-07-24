$(window).scroll(function (e) {
  if ($(window).scrollTop() <= 0)
    $("nav").css("background-color", " rgba(233, 235, 227, 0.8)");
  else $("nav").css("background-color", " rgba(233, 235, 227, 1)");
});

var s = skrollr.init();
let data = $(window).scrollTop();

let counter = 0;
setInterval(() => {
  counter += 1;
  if (counter % 2 == 0) {
    $("#mypic").css("background-image", "url('./pictures/bgimg12.jpg')");
    $("#mypic").addClass("bgchange");
    $("#myslogan").removeClass("moveinarea");
    $("#myslogan").addClass("changedmoveinarea");
  } else {
    $("#mypic").css("background-image", "url('./pictures/bgimg1.jpg')");
    $("#mypic").removeClass("bgchange");
    $("#myslogan").addClass("moveinarea");
    $("#myslogan").removeClass("changedmoveinarea");
  }
}, 5000);

let bgmusic = new Audio("./mixkit-island-beat-250.mp3");
bgmusic.loop = true;
bgmusic.volume = 0.3;

$(".audioplayer").click((e) => {
  if (e.target.className == "fa-solid fa-volume-xmark") {
    $("i").removeClass("fa-volume-xmark");
    $("i").addClass("fa-volume-high");
    bgmusic.play();
  } else {
    $("i").removeClass("fa-volume-high");
    $("i").addClass("fa-volume-xmark");
    bgmusic.pause();
  }
});
