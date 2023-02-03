//delay clicking links so that on mobile



// execute only if on a computer

if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {

    // no delay on non-mobile devices
    $(function(){
        $("a").click(function(evt){
            var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = link;
            }, 0);
        });
    });

    function mouseOver1() {
        document.getElementById("about").src = "./images/Icons/about-col.gif";
    }
    
    function mouseOut1() {
        document.getElementById("about").src = "./images/Icons/about-bw.jpg";
    }
    
    function mouseOver2() {
        document.getElementById("projects").src = "./images/Icons/projects-col.gif";
    }
    
    function mouseOut2() {
        document.getElementById("projects").src = "./images/Icons/projects-bw.jpg";
    }
    
    function mouseOver3() {
        document.getElementById("skills").src = "./images/Icons/skills-col.gif";
    }
    
    function mouseOut3() {
        document.getElementById("skills").src = "./images/Icons/skills-bw.jpg";
    }
    
    function mouseOver4() {
        document.getElementById("contact").src = "./images/Icons/contact-col.gif";
    }
    
    function mouseOut4() {
        document.getElementById("contact").src = "./images/Icons/contact-bw.jpg";
    }
    
    function mouseOver5() {
        document.getElementById("website").src = "./images/Icons/website-col.gif";
    }
    
    function mouseOut5() {
        document.getElementById("website").src = "./images/Icons/website-bw.jpg";
    }
    
    function mouseOver6() {
        document.getElementById("calculator").src = "./images/Icons/calculator-col.gif";
    }
    
    function mouseOut6() {
        document.getElementById("calculator").src = "./images/Icons/calculator-bw.jpg";
    }

  } else {

    // set delay on non-mobile devices so that the user can see onclick colour change
    $(function(){
        $("a").click(function(evt){
            var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = link;
            }, 500);
        });
    });

    function onClick1() {
        document.getElementById("about").src = "./images/Icons/about-col.jpg";
    }
    
    function onClick2() {
        document.getElementById("projects").src = "./images/Icons/projects-col.jpg";
    }
    
    function onClick3() {
        document.getElementById("skills").src = "./images/Icons/skills-col.jpg";
    }
    
    function onClick4() {
        document.getElementById("contact").src = "./images/Icons/contact-col.jpg";
    }
    
    function onClick5() {
        document.getElementById("website").src = "./images/Icons/website-col.jpg";
    }
    
    function onClick6() {
        document.getElementById("calculator").src = "./images/Icons/calculator-col.jpg";
    }
    
  }