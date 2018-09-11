var content = document.getElementById("content");
var test = document.getElementById("test");
var head = document.getElementById("head").offsetTop;
var scrollDistance = content.scrollHeight * 0.01;
var fps = 1000 / 60;
var aboutDivPos = document.getElementById("aboutDiv").offsetTop;
var portfolioDivPos = document.getElementById("portfolioDiv").offsetTop;
var contactDivPos = document.getElementById("contactDiv").offsetTop;

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

}

function scrollToHome(){
    if (content.scrollTop > 0) {
        content.scrollTop -= scrollDistance;
        setTimeout(scrollToHome, fps);
    }
}

function scrollToAbout(){
    if (content.scrollTop > aboutDivPos) {
        content.scrollTop -= scrollDistance;
        if (content.scrollTop <= aboutDivPos) {
            return;
        } else {
            setTimeout(scrollToAbout, fps);
        }
    } else if (content.scrollTop < aboutDivPos) {
        content.scrollTop += scrollDistance;
        if (content.scrollTop >= aboutDivPos) {
            return;
        } else {
            setTimeout(scrollToAbout, fps);
        }
    }
}

function scrollToPortfolio(){
    if (content.scrollTop > portfolioDivPos) {
        content.scrollTop -= scrollDistance;
        if (content.scrollTop <= portfolioDivPos) {
            return;
        } else {
            setTimeout(scrollToPortfolio, fps);
        }
    } else if (content.scrollTop < portfolioDivPos) {
        content.scrollTop += scrollDistance;
        if (content.scrollTop >= portfolioDivPos) {
            return;
        } else {
            setTimeout(scrollToPortfolio, fps);
        }
    }
}

function scrollToContact(){
    if (content.scrollTop > contactDivPos) {
        content.scrollTop -= scrollDistance;
        if (content.scrollTop <= contactDivPos) {
            return;
        } else {
            setTimeout(scrollToContact, fps);
        }
    } else if (content.scrollTop < contactDivPos) {
        content.scrollTop += scrollDistance;
        if (content.scrollTop >= contactDivPos) {
            return;
        } else {
            setTimeout(scrollToContact, fps);
        }
    }
}

function move(){
  
    if (content.scrollTop < head){
        $("nav").css("visibility","hidden");
    }
    if (content.scrollTop > head){
        $("nav").css("visibility","visible");
    }
  
    $(".opt10").each( function(){
        var top_of_object = $(this).offset().top;
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        // var bottom_of_window = $(window).height() * 0.95;
        var bottom_of_window = $(window).height() * 0.8;
    
        if(bottom_of_window > top_of_object && bottom_of_object > $(window).height() * 0.25){
            $(this).css("opacity","1");
        }
        else{
            $(this).css("opacity","0.2");
        }
    });

}

window.onresize = function(){
    head = document.getElementById("head").offsetTop;
    scrollDistance = content.scrollHeight * 0.01;
    aboutDivPos = document.getElementById("aboutDiv").offsetTop;
    portfolioDivPos = document.getElementById("portfolioDiv").offsetTop;
    contactDivPos = document.getElementById("contactDiv").offsetTop;
};

//function show(){
//    test.innerHTML = "<p>aboutDiv: " + document.getElementById("aboutDiv").offsetTop + "</p><p>portfolioDiv:" + document.getElementById("portfolioDiv").offsetTop + "</p>";
//}
