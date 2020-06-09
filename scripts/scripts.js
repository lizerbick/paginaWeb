let show = 1;
let img = document.getElementById("menubar");
let menu = document.getElementById("navbar_open");
let img_src = ["icons/menu_bar_close.svg", "icons/menu_bar.svg"] 

img.addEventListener = ("click",desplegar);

function desplegar () {

    if ( show == 1 ) {
        menu.style.top = "63.97px";
        menu.style.transition = ".4s ease";
        img.src = img_src[0];
        img.style.transition = "1s ease"
        show = 0;
    }

    else {
        menu.style.top = "-47px";
        menu.style.transition = ".4s ease";
        img.src = img_src[1];
        img.style.transition = ".1s ease"
        show = 1;
    }
}

