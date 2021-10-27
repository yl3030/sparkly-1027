$(".top").click(function () {
  $("html,body").animate({ scrollTop: 0 }, parseInt(200));
});

$(".menu-box").click(function () {
  $(".main-nav").addClass("active");
});
$(".menu-cross").click(function () {
  $(".main-nav").removeClass("active");
});
$(".main-nav").children("ul").children("li").children("a").click(function(){
  $(".main-nav").removeClass("active");
})

// header控制是否出現
var p = 0,
  t = 0;
$(window).on("scroll resize", function () {
  p = $(this).scrollTop();
  // console.log("p=" + p + ",t=" + t);
  if (t >= 0 && p >= 0) {
    if (t < p) {
      // console.log("往下,p=" + p + ",t=" + t);
      $("header").css("top", "-70px");
    } else {
      // console.log("往上,p=" + p + ",t=" + t);
      $("header").css("top", "0");
    }
    setTimeout(function () {
      t = p;
    }, 0);
  }
});

// })

// loading
window.onload = function () {
  $("#loading").fadeOut();
};
