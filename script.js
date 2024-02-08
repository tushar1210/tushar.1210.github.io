$( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2016/02/be-my-valentine.html#tlt")  
});

$(document).ready(function(){
  $('.title').click(function(){
    $('.container').addClass('open');
  });
  
  
  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});


function onClickYes() {
    console.log("yes");
    // window.location.href ='yes.html'
    var y = document.getElementById("no")
    y.style.display = "none";
    var x = document.getElementById("yes")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    setTimeout(()=>{
        fadeOutEffect(x)
    }, 5000)
}


function onClickNo() {
    // console.log("no");
    // window.location.href ='no.html'
    var y = document.getElementById("yes")
    y.style.display = "none";
    var x = document.getElementById("no")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    setTimeout(()=>{
        fadeOutEffect(x)
    }, 5000)
}

function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}