
if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) { // for non-mobile devices...

    function delay (id, URL) { // new tab
        setTimeout(function() {
            window.open(URL)
          }, 0)
    }

    function delay2 (id, URL) { // same tab
        setTimeout(function() {
            window.location = URL
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

            case "hangman":
                document.getElementById("hangman").src = "./images/Icons/hangman-col.gif";
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

            case "hangman":
            document.getElementById("hangman").src = "./images/Icons/hangman-bw.jpg";
            break;

            default:
                console.log("Error");
        }
    }

  } else { // for mobile devices...
    
    function delay (id, URL) { // new tab
        mouseDown(id); // start coloured gif animation
        setTimeout(function() {
            window.open(URL)
            mouseUp(id) // end coloured gif animation
          }, 1000)
    }

    function delay2 (id, URL) { // same tab
        mouseDown(id); // start coloured gif animation
        setTimeout(function() {
            window.location = URL
            mouseUp(id) // end coloured gif animation
          }, 1000)
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

            case "hangman":
                document.getElementById("hangman").src = "./images/Icons/hangman-col.gif";
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

            case "hangman":
            document.getElementById("hangman").src = "./images/Icons/hangman-bw.jpg";
            break;

            default:
                console.log("Error");
        }
    }
}