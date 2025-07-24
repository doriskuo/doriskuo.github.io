$("#switch").change(function (e) {
  console.log(e);
  if (this.checked) {
    $(".bgbox_chi").removeClass("showoff");
    $(".bgbox_enl").addClass("showoff");
  } else {
    $(".bgbox_enl").removeClass("showoff");
    $(".bgbox_chi").addClass("showoff");
  }
});
