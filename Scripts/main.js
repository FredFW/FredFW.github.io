var content = document.getElementById("content");
var test = document.getElementById("test");

function loaded(){

    $(".navbar-nav li a").click(function (event){
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
            $(".navbar-collapse").collapse('hide');
        }
    });
  
    $(".navbar-brand").click(function (event){
        var toggle1 = $(".navbar-toggle").is(":visible");
        if (toggle1) {
            $(".navbar-collapse").collapse('hide');
        }
    });

};


// document.addEventListener("touchmove", function (e) { e.preventDefault(); }, false);
// document.addEventListener("keydown", move);


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

// function updatePosition(){
//   var homeDivBottom = $("#homeDiv").outerHeight();
//   var aboutDivBottom = homeDivBottom + $("#abouthead").outerHeight() + $("#aboutDiv").outerHeight() + $(".skill").outerHeight();
//   var portfolioDivBottom = aboutDivBottom + $("#portfolioDiv").outerHeight() + $(".showcase").outerHeight();
//   var contactDivBottom = portfolioDivBottom + $("#contactDiv").outerHeight();
  
//   if (-(myScroll.y) < homeDivBottom){
//     sessionStorage.setItem("y","#homeDiv");
//   }
//   else if (-(myScroll.y) < aboutDivBottom){
//     sessionStorage.setItem("y","#abouthead");
//   }
//   else if (-(myScroll.y) < portfolioDivBottom){
//     sessionStorage.setItem("y","#portfolioDiv");
//   }
//   else{
//     sessionStorage.setItem("y","#contactDiv");
//   }

// }

function move(){
  
    if (content.scrollTop < 300){
        $("nav").css("visibility","hidden");
    }
    if (content.scrollTop > 300){
        $("nav").css("visibility","visible");
    }
  
    // $(".moveFromLeft").each( function(){
    $(".opt10").each( function(){
        var top_of_object = $(this).offset().top;
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        // var bottom_of_window = $(window).height() * 0.95;
        var bottom_of_window = $(window).height() * 0.8;
    
        if(bottom_of_window > top_of_object && bottom_of_object > $(window).height() * 0.25){
            if(bottom_of_window > top_of_object){
                // $(this).animate({left:"0"},"slow");
                $(this).css("opacity","1");
            }
            else{
                $(this).css("opacity","0.2");
            }
        }
    })

}
  
  // $(".moveFromRight").each( function(){
  //   var top_of_object = $(this).offset().top;
  //   var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  //   // var bottom_of_window = $(window).height() * 0.95;
  //   var bottom_of_window = $(window).height() * 0.8;
  //   if(bottom_of_window > top_of_object && bottom_of_object > $(window).height() * 0.25){
  //   // if(bottom_of_window > top_of_object){
  //     // $(this).animate({right:"0"},"slow");
  //     $(this).css("opacity","1");
  //   }
  //   else{
  //     $(this).css("opacity","0.2");
  //   }
  // });
  
  /*
  var homeDivBottom = $("#homeDiv").outerHeight();
  var aboutDivBottom = homeDivBottom + $("#abouthead").outerHeight() + $("#aboutDiv").outerHeight() + $(".skill").outerHeight();
  var portfolioDivBottom = aboutDivBottom + $("#portfolioDiv").outerHeight() + $(".showcase").outerHeight();
  var contactDivBottom = portfolioDivBottom + $("#contactDiv").outerHeight();
  
  if (-(myScroll.y) < homeDivBottom){
    sessionStorage.setItem("y","#homeDiv");
  }
  else if (-(myScroll.y) < aboutDivBottom){
    sessionStorage.setItem("y","#abouthead");
  }
  else if (-(myScroll.y) < portfolioDivBottom){
    sessionStorage.setItem("y","#portfolioDiv");
  }
  else{
    sessionStorage.setItem("y","#contactDiv");
  }
  */

function show(){
    test.innerHTML = "content.scrollTop: " + content.scrollTop;
};
