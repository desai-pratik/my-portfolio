$(function () {
  // show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#hide").css("display", "block");
  }); 
 
  // hide mobile nav
  $("#mobile-nav-close-btn, #hide").click(function () {
    $("#hide").css("display", "none");
  });
});


$(window).on("load", function () {
  // initialize isotope
  $(".isotope-container").isotope({});

  // filter items on button click
  $(".isotope-filters").on("click", "button", function () {
    // get filter value
    var filtervalue = $(this).attr("data-filters");

    //filter portfolio
    $(".isotope-container").isotope({
      filter: filtervalue,
    });
    // active button
    $(".isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});


$(function () {
  $("#Portfolio").magnificPopup({
    delegate: ".first",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

$(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,

    responsive: {
      // breakpoint from 0 up
      360: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 2,
      },

      1140: {
        items: 3,
      },

    },
  });
});










  