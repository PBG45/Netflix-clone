$(document).ready(function () {
  let panelIsOpen = false;

  $("#flip").click(function () {
    if (!panelIsOpen) {
      //after
      $("#panel2").slideUp();
      $("#plus2").animate({ rotate: '0deg' });
      $("#panel3").slideUp();
      $("#plus3").animate({ rotate: '0deg' });
      $("#panel4").slideUp();
      $("#plus4").animate({ rotate: '0deg' });
      $("#panel5").slideUp();
      $("#plus5").animate({ rotate: '0deg' });
      $("#panel6").slideUp();
      $("#plus6").animate({ rotate: '0deg' });

      if ($(window).width() < 600) {
        $(".sub-content3").css("height", "150vh");
      } else {
        $(".sub-content3").css("height", "150vh");
      }
      //main
      $("#panel").slideDown("slow", function () {
        $("#plus").animate({ rotate: "45deg" }, "slow");

      });
      panelIsOpen = true;
    } else {
      $("#panel").slideUp("slow", function () {
        $("#plus").animate({ rotate: "0deg" }, "slow");

        if ($(window).width() < 600) {
          $(".sub-content3").css("height", "150vh");
        }

        if ($(window).width() > 600) {
          $(".sub-content3").css("height", "150vh");
        }


      });
      panelIsOpen = false;
    }
  });

  $("#flip2").click(function () {
    if (!panelIsOpen) {
      $("#panel").slideUp();
      $("#plus").animate({ rotate: '0deg' });
      $("#panel3").slideUp();
      $("#plus3").animate({ rotate: '0deg' });
      $("#panel4").slideUp();
      $("#plus4").animate({ rotate: '0deg' });
      $("#panel5").slideUp();
      $("#plus5").animate({ rotate: '0deg' });
      $("#panel6").slideUp();
      $("#plus6").animate({ rotate: '0deg' });

      if ($(window).width() < 600) {
        $(".sub-content3").css("height", "150vh");
      } else {
        $(".sub-content3").css("height", "150vh");
      }

      $("#panel2").slideDown("slow", function () {
        $("#plus2").animate({ rotate: "45deg" }, "slow");

      });
      panelIsOpen = true;
    } else {
      $("#panel2").slideUp("slow", function () {
        $("#plus2").animate({ rotate: "0deg" }, "slow");

        if ($(window).width() < 600) {
          $(".sub-content3").css("height", "150vh");
        }

        if ($(window).width() > 600) {
          $(".sub-content3").css("height", "150vh");
        }

      });
      panelIsOpen = false;
    }
  });

  $("#flip3").click(function () {
    if (!panelIsOpen) {
      $("#panel").slideUp();
      $("#plus").animate({ rotate: '0deg' });
      $("#panel2").slideUp();
      $("#plus2").animate({ rotate: '0deg' });
      $("#panel4").slideUp();
      $("#plus4").animate({ rotate: '0deg' });
      $("#panel5").slideUp();
      $("#plus5").animate({ rotate: '0deg' });
      $("#panel6").slideUp();
      $("#plus6").animate({ rotate: '0deg' });

      if ($(window).width() < 600) {
        $(".sub-content3").css("height", "180vh");
      } else {
        $(".sub-content3").css("height", "150vh");
      }

      $("#panel3").slideDown("slow", function () {
        $("#plus3").animate({ rotate: "45deg" }, "slow");

      });
      panelIsOpen = true;
    } else {
      $("#panel3").slideUp("slow", function () {
        $("#plus3").animate({ rotate: "0deg" }, "slow");

        if ($(window).width() < 600) {
          $(".sub-content3").css("height", "150vh");
        }

        if ($(window).width() > 600) {
          $(".sub-content3").css("height", "150vh");
        }


      });
      panelIsOpen = false;
    }
  });


  $("#flip4").click(function () {
    if (!panelIsOpen) {
      $("#panel").slideUp();
      $("#plus").animate({ rotate: '0deg' });
      $("#panel2").slideUp();
      $("#plus2").animate({ rotate: '0deg' });
      $("#panel3").slideUp();
      $("#plus3").animate({ rotate: '0deg' });
      $("#panel5").slideUp();
      $("#plus5").animate({ rotate: '0deg' });
      $("#panel6").slideUp();
      $("#plus6").animate({ rotate: '0deg' });


      if ($(window).width() < 600) {
        $(".sub-content3").css("height", "150vh");
      } else {
        $(".sub-content3").css("height", "150vh");
      }

      $("#panel4").slideDown("slow", function () {
        $("#plus4").animate({ rotate: "45deg" }, "slow");

      });
      panelIsOpen = true;
    } else {
      $("#panel4").slideUp("slow", function () {
        $("#plus4").animate({ rotate: "0deg" }, "slow");

        if ($(window).width() < 600) {
          $(".sub-content3").css("height", "150vh");
        }

        if ($(window).width() > 600) {
          $(".sub-content3").css("height", "150vh");
        }

      });
      panelIsOpen = false;
    }
  });

  $("#flip5").click(function () {
    if (!panelIsOpen) {
      $("#panel").slideUp();
      $("#plus").animate({ rotate: '0deg' });
      $("#panel2").slideUp();
      $("#plus2").animate({ rotate: '0deg' });
      $("#panel3").slideUp();
      $("#plus3").animate({ rotate: '0deg' });
      $("#panel4").slideUp();
      $("#plus4").animate({ rotate: '0deg' });
      $("#panel6").slideUp();
      $("#plus6").animate({ rotate: '0deg' });

      if ($(window).width() < 600) {
        $(".sub-content3").css("height", "150vh");
      } else {
        $(".sub-content3").css("height", "150vh");
      }


      $("#panel5").slideDown("slow", function () {
        $("#plus5").animate({ rotate: "45deg" }, "slow");

      });
      panelIsOpen = true;
    } else {
      $("#panel5").slideUp("slow", function () {
        $("#plus5").animate({ rotate: "0deg" }, "slow");

        if ($(window).width() < 600) {
          $(".sub-content3").css("height", "150vh");
        }

        if ($(window).width() > 600) {
          $(".sub-content3").css("height", "150vh");
        }
      });
      panelIsOpen = false;
    }
  });

  $("#flip6").click(function () {
    if (!panelIsOpen) {
      $("#panel").slideUp();
      $("#plus").animate({ rotate: '0deg' });
      $("#panel2").slideUp();
      $("#plus2").animate({ rotate: '0deg' });
      $("#panel3").slideUp();
      $("#plus3").animate({ rotate: '0deg' });
      $("#panel4").slideUp();
      $("#plus4").animate({ rotate: '0deg' });
      $("#panel5").slideUp();
      $("#plus5").animate({ rotate: '0deg' });

      if ($(window).width() < 600) {
        $(".sub-content3").css("height", "150vh");
      } else {
        $(".sub-content3").css("height", "150vh");
      }

      $("#panel6").slideDown("slow", function () {
        $("#plus6").animate({ rotate: "45deg" }, "slow");

      });
      panelIsOpen = true;
    } else {
      $("#panel6").slideUp("slow", function () {


        if ($(window).width() < 600) {
          $(".sub-content3").css("height", "150vh");
        }


        if ($(window).width() > 600) {
          $(".sub-content3").css("height", "150vh");

        }


        $("#plus6").animate({ rotate: "0deg" }, "slow");
      });
      panelIsOpen = false;
    }
  });



});
