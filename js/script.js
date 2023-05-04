let yourtext = [["Front & Designer"] , ["Web Designer"] , ["Web Developer"]];

let x = 0;
let y = 0;
let wait = 300;
let additionalwait = 5;
let txt = yourtext[0][0].split("");
let out = "";
let retyping = setInterval(function () {
  document.getElementById("changingText").innerHTML = out;
  if (x > txt.length - 1) {
  } else {
    out += txt[x];
  }
  x++;
  if (x == txt.length + 2 + additionalwait) {
    if (y == yourtext.length - 1) {
      y = 0;
      txt = yourtext[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourtext[y][1];
      x = 0;
    } else {
      y += 1;
      txt = yourtext[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourtext[y][1];
      x = 0;
    }
  }
}, wait);

//   counter
$(document).ready(function () {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

// portfolio
$(document).ready(function () {
  $(".ALL").click(function () {
    $(".portfolio-item*").removeClass("activeble");
  });

  $(".HTML5").click(function () {
    $(".portfolio-item*").addClass("activeble");
    $(".port-1").removeClass("activeble");
  });

  $(".CSS3").click(function () {
    $(".portfolio-item*").addClass("activeble");
    $(".port-2 , .port-3 , .port-4 , .port-5 , .port-6 ").removeClass("activeble");
  });

  $(".SASS").click(function () {
    $(".portfolio-item*").addClass("activeble");
    $(".port-7 , .port-8 ").removeClass("activeble");
  });

  $(".BOOTSTRAP").click(function () {
    $(".portfolio-item*").addClass("activeble");
    $(".port-9 , .port-10 ").removeClass("activeble");
  });

  $(".JQUERY").click(function () {
    $(".portfolio-item*").addClass("activeble");
    $(".port-11 , .port-12 ").removeClass("activeble");
  });
});
// responsive manu

if($(window).width() <= 991){
  $('.header .sidebar').hide();    
} else {
  $('.header .sidebar').show();
} 

$(document).ready(function(){ 
  $('.mob-manu').click(function(){ 
       $('.header .sidebar').toggle();
     }) 
})
 
 