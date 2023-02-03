
// for non-mobile devices...

if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {

    // no delay on non-mobile devices
    // $(function(){
    //     $("a").click(function(evt){
    //         var link = $(this).attr("href");
    //         setTimeout(function() {
    //             window.location.href = link;
    //         }, 0);
    //     });
    // });

    function mouseOver(id) {
        switch (id) {
            case "about":
                document.getElementById("about").src = "./images/Icons/about-col.gif";
                break;

            case "projects":
                document.getElementById("projects").src = "./images/Icons/projects-col.gif";
                break;
                
            case "skills":
                document.getElementById("skills").src = "./images/Icons/skills-col.gif";
                break;

            case "contact":
                document.getElementById("contact").src = "./images/Icons/contact-col.gif";
                break;

            case "website":
                document.getElementById("website").src = "./images/Icons/website-col.gif";
                break;

            case "calculator":
                document.getElementById("calculator").src = "./images/Icons/calculator-col.gif";
                break;

            default:
                console.log("Error");
        }

    }

    function mouseOut(id) {
        switch (id) {
            case "about":
                document.getElementById("about").src = "./images/Icons/about-bw.jpg";
                break;

            case "projects":
                document.getElementById("projects").src = "./images/Icons/projects-bw.jpg";
                break;
                
            case "skills":
                document.getElementById("skills").src = "./images/Icons/skills-bw.jpg";
                break;

            case "contact":
                document.getElementById("contact").src = "./images/Icons/contact-bw.jpg";
                break;

            case "website":
                document.getElementById("website").src = "./images/Icons/website-bw.jpg";
                break;

            case "calculator":
                document.getElementById("calculator").src = "./images/Icons/calculator-bw.jpg";
                break;

            default:
                console.log("Error");
        }
    }

    // function mouseOver1() {
    //     document.getElementById("about").src = "./images/Icons/about-col.gif";
    // }
    
    // function mouseOut1() {
    //     document.getElementById("about").src = "./images/Icons/about-bw.jpg";
    // }
    
    // function mouseOver2() {
    //     document.getElementById("projects").src = "./images/Icons/projects-col.gif";
    // }
    
    // function mouseOut2() {
    //     document.getElementById("projects").src = "./images/Icons/projects-bw.jpg";
    // }
    
    // function mouseOver3() {
    //     document.getElementById("skills").src = "./images/Icons/skills-col.gif";
    // }
    
    // function mouseOut3() {
    //     document.getElementById("skills").src = "./images/Icons/skills-bw.jpg";
    // }
    
    // function mouseOver4() {
    //     document.getElementById("contact").src = "./images/Icons/contact-col.gif";
    // }
    
    // function mouseOut4() {
    //     document.getElementById("contact").src = "./images/Icons/contact-bw.jpg";
    // }
    
    // function mouseOver5() {
    //     document.getElementById("website").src = "./images/Icons/website-col.gif";
    // }
    
    // function mouseOut5() {
    //     document.getElementById("website").src = "./images/Icons/website-bw.jpg";
    // }
    
    // function mouseOver6() {
    //     document.getElementById("calculator").src = "./images/Icons/calculator-col.gif";
    // }
    
    // function mouseOut6() {
    //     document.getElementById("calculator").src = "./images/Icons/calculator-bw.jpg";
    // }



// for mobile devices...

  } else {

    // set delay on mobile devices so that the user can see onclick colour change
    $(function(){
        $("a").click(function(evt){
            var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = link;
            }, 2000);
        });
    });

    function mouseDown(id) {

        switch (id) {
            case "about":
                document.getElementById("about").src = "./images/Icons/about-col.gif";
                break;

            case "projects":
                document.getElementById("projects").src = "./images/Icons/projects-col.gif";
                break;
                
            case "skills":
                document.getElementById("skills").src = "./images/Icons/skills-col.gif";
                break;

            case "contact":
                document.getElementById("contact").src = "./images/Icons/contact-col.gif";
                break;

            case "website":
                document.getElementById("website").src = "./images/Icons/website-col.gif";
                break;

            case "calculator":
                document.getElementById("calculator").src = "./images/Icons/calculator-col.gif";
                break;

            default:
                console.log("Error");
        }
    }

    function mouseUp(id) {

        switch (id) {
            case "about":
                document.getElementById("about").src = "./images/Icons/about-bw.jpg";
                break;

            case "projects":
                document.getElementById("projects").src = "./images/Icons/projects-bw.jpg";
                break;
                
            case "skills":
                document.getElementById("skills").src = "./images/Icons/skills-bw.jpg";
                break;

            case "contact":
                document.getElementById("contact").src = "./images/Icons/contact-bw.jpg";
                break;

            case "website":
                document.getElementById("website").src = "./images/Icons/website-bw.jpg";
                break;

            case "calculator":
                document.getElementById("calculator").src = "./images/Icons/calculator-bw.jpg";
                break;

            default:
                console.log("Error");
        }
    }

    // function mouseDown1() {
    //     document.getElementById("about").src = "./images/Icons/about-col.gif";
    // }
    
    // function mouseUp1() {
    //     document.getElementById("about").src = "./images/Icons/about-bw.jpg";
    // }
    
    // function mouseDown2() {
    //     document.getElementById("projects").src = "./images/Icons/projects-col.gif";
    // }
    
    // function mouseUp2() {
    //     document.getElementById("projects").src = "./images/Icons/projects-bw.jpg";
    // }
    
    // function mouseDown3() {
    //     document.getElementById("skills").src = "./images/Icons/skills-col.gif";
    // }
    
    // function mouseUp3() {
    //     document.getElementById("skills").src = "./images/Icons/skills-bw.jpg";
    // }
    
    // function mouseDown4() {
    //     document.getElementById("contact").src = "./images/Icons/contact-col.gif";
    // }
    
    // function mouseUp4() {
    //     document.getElementById("contact").src = "./images/Icons/contact-bw.jpg";
    // }
    
    // function mouseDown5() {
    //     document.getElementById("website").src = "./images/Icons/website-col.gif";
    // }
    
    // function mouseUp5() {
    //     document.getElementById("website").src = "./images/Icons/website-bw.jpg";
    // }
    
    // function mouseDown6() {
    //     document.getElementById("calculator").src = "./images/Icons/calculator-col.gif";
    // }
    
    // function mouseUp6() {
    //     document.getElementById("calculator").src = "./images/Icons/calculator-bw.jpg";
    // }
  }