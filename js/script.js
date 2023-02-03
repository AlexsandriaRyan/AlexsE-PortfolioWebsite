
if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) { // for non-mobile devices...

    function delay (URL) {
        setTimeout(function() {
            window.open(URL)
          }, 0)
    }

    function mouseOver (id) {
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

    function mouseOut (id) {
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

  } else { // for mobile devices...
    

    // set delay on mobile devices so that the user can see onclick colour change
    // $(function(){
    //     $("a").click(function(evt){
    //         var link = $(this).attr("href");
    //         setTimeout(function() {
    //             window.location.href = link;
    //         }, 2000);
    //     });
    // });

    function delay (id, URL) {
        setTimeout(function() {
            window.open(URL)
            mouseUp(id)
          }, 3000)
    }

    function mouseDown (id) {

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

    function mouseUp (id) {

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
}