$("#switch").change(function (e) {
  console.log(e);
  if (this.checked) {
    $(".contentbox_chi").removeClass("showoff");
    $(".contentbox_enl").addClass("showoff");
  } else {
    $(".contentbox_enl").removeClass("showoff");
    $(".contentbox_chi").addClass("showoff");
  }
});
