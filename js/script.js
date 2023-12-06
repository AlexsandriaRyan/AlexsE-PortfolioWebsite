
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

            case "wordle":
                document.getElementById("wordle").src = "./images/Icons/wordle-col.gif";
                break;
            
            case "realty":
                document.getElementById("realty").src = "./images/Icons/realty-col.gif";
                break;

            case "dog":
                document.getElementById("dog").src = "./images/Icons/dog-col.gif";
                break;

            case "tcpchat":
                document.getElementById("tcpchat").src = "./images/Icons/tcpchat-col.gif";
                break;

            case "rpg":
                document.getElementById("rpg").src = "./images/Icons/rpg-col.gif";
                break;

            case "music-store":
                document.getElementById("music-store").src = "./images/Icons/music-store-col.gif";
                break;

            case "visual-novel":
                document.getElementById("visual-novel").src = "./images/Icons/visual-novel-col.gif";
                break;

            case "insulin-pump":
                document.getElementById("insulin-pump").src = "./images/Icons/insulin-pump-col.gif";
                break;

            case "zombie":
                document.getElementById("zombie").src = "./images/Icons/zombie-col.gif";
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

            case "wordle":
                document.getElementById("wordle").src = "./images/Icons/wordle-bw.jpg";
                break;

            case "realty":
                document.getElementById("realty").src = "./images/Icons/realty-bw.jpg";
                break;

            case "dog":
                document.getElementById("dog").src = "./images/Icons/dog-bw.jpg";
                break;

            case "tcpchat":
                document.getElementById("tcpchat").src = "./images/Icons/tcpchat-bw.jpg";
                break;

            case "rpg":
                document.getElementById("rpg").src = "./images/Icons/rpg-bw.jpg";
                break;

            case "music-store":
                document.getElementById("music-store").src = "./images/Icons/music-store-bw.jpg";
                break;

            case "visual-novel":
                document.getElementById("visual-novel").src = "./images/Icons/visual-novel-bw.jpg";
                break;

            case "insulin-pump":
                document.getElementById("insulin-pump").src = "./images/Icons/insulin-pump-bw.jpg";
                break;

            case "zombie":
                document.getElementById("zombie").src = "./images/Icons/zombie-bw.jpg";
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

            case "wordle":
                document.getElementById("wordle").src = "./images/Icons/wordle-col.gif";
                break;

            case "realty":
                document.getElementById("realty").src = "./images/Icons/realty-col.gif";
                break;

            case "dog":
                document.getElementById("dog").src = "./images/Icons/dog-col.gif";
                break;

            case "tcpchat":
                document.getElementById("tcpchat").src = "./images/Icons/tcpchat-col.gif";
                break;

            case "rpg":
                document.getElementById("rpg").src = "./images/Icons/rpg-col.gif";
                break;

            case "music-store":
                document.getElementById("music-store").src = "./images/Icons/music-store-col.gif";
                break;

            case "visual-novel":
                document.getElementById("visual-novel").src = "./images/Icons/visual-novel-col.gif";
                break;

            case "insulin-pump":
                document.getElementById("insulin-pump").src = "./images/Icons/insulin-pump-col.gif";
                break;

            case "zombie":
                document.getElementById("zombie").src = "./images/Icons/zombie-col.gif";
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

            case "wordle":
                document.getElementById("wordle").src = "./images/Icons/wordle-bw.jpg";
                break;

            case "realty":
                document.getElementById("realty").src = "./images/Icons/realty-bw.jpg";
                break;

            case "dog":
                document.getElementById("dog").src = "./images/Icons/dog-bw.jpg";
                break;

            case "tcpchat":
                document.getElementById("tcpchat").src = "./images/Icons/tcpchat-bw.jpg";
                break;

            case "rpg":
                document.getElementById("rpg").src = "./images/Icons/rpg-bw.jpg";
                break;

            case "music-store":
                document.getElementById("music-store").src = "./images/Icons/music-store-bw.jpg";
                break;

            case "visual-novel":
                document.getElementById("visual-novel").src = "./images/Icons/visual-novel-bw.jpg";
                break;

            case "insulin-pump":
                document.getElementById("insulin-pump").src = "./images/Icons/insulin-pump-bw.jpg";
                break;

            case "zombie":
                document.getElementById("zombie").src = "./images/Icons/zombie-bw.jpg";
                break;

            default:
                console.log("Error");
        }
    }
}