var myScroll = "";

$(document).ready(function(){
  
  $(".navbar-nav li a").click(function (event) {
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
  
  $(".navbar-brand").click(function (event) {
    var toggle1 = $(".navbar-toggle").is(":visible");
    if (toggle1) {
      $(".navbar-collapse").collapse('hide');
    }
  });
  
  myScroll = new IScroll("#wrapper",{
    bounce: false,
    mouseWheel: true,
    scrollbars: true,
    interactiveScrollbars: true,
    keyBindings: true,
    momentum: false,
    click: true,
    probeType: 2
  });
  
  $("#scroller").stellar({
    horizontalScrolling: false,
    verticalScrolling: true,
    responsive: false,
    scrollProperty: "transform",
    positionProperty: "transform",
    parallaxBackgrounds: true,
    parallaxElements: false,
    hideDistantElements: true
  });
  
  initPosition();
  
  $(window).resize(function(){
    var temp = updatePosition();
    sessionStorage.setItem("y",temp);
    location.reload();
  });

  myScroll.on("scroll", move);
  myScroll.on("scrollEnd", move);
});

document.addEventListener("touchmove", function (e) { e.preventDefault(); }, false);
document.addEventListener("keydown", move);

function scrollToHome(){
  myScroll.scrollToElement("#homeDiv");
}

function scrollToAbout(){
	myScroll.scrollToElement("#abouthead");
}

function scrollToPortfolio(){
  myScroll.scrollToElement("#portfolioDiv");
}

function scrollToContact(){
  myScroll.scrollToElement("#contactDiv");
}

function updatePosition(){
  
  var homeDivBottom = $("#homeDiv").outerHeight();
  var aboutDivBottom = homeDivBottom + $("#abouthead").outerHeight() + $("#aboutDiv").outerHeight() + $(".skill").outerHeight();
  var portfolioDivBottom = aboutDivBottom + $("#portfolio").outerHeight();
  var contactDivBottom = portfolioDivBottom + $("#contactDiv").outerHeight();
  
  if (-(myScroll.y) < homeDivBottom){
    return "#homeDiv";
  }
  else if (-(myScroll.y) < aboutDivBottom){
    return "#abouthead";
  }
  else if (-(myScroll.y) < portfolioDivBottom){
    return "#portfolioDiv";
  }
  else{
    return "#contactDiv";
  }
  
}

function initPosition(){
  if (sessionStorage.getItem("y")){
    var position = sessionStorage.getItem("y");
    myScroll.scrollToElement(position);
  }
}

function move() {
  
  if (myScroll.y > -300) {
      $("nav").css("opacity","0");
  }
  if (myScroll.y < -300) {
      $("nav").css("opacity","1");
  }
  
  $(".moveFromLeft").each( function(){
    var top_of_object = $(this).offset().top;
    // var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height() - 50;
    // if(bottom_of_window > top_of_object && bottom_of_object > 0){
    if(bottom_of_window > top_of_object){
      $(this).animate({left:"0"},"slow");
    }
  });
  
  $(".moveFromRight").each( function(){
    var top_of_object = $(this).offset().top;
    // var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height() - 50;
    // if(bottom_of_window > top_of_object && bottom_of_object > 0){
    if(bottom_of_window > top_of_object){
      $(this).animate({right:"0"},"slow");
    }
  });
}
