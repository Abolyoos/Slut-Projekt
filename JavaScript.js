/**Rad 1-59: Informations boxar om sidans olika kategorier*/

function Övnignar() {
    var knapp1 = document.getElementById("knapp1");
    var InfoÖvningar = document.getElementById("InfoÖvningar");
    if (InfoÖvningar.hidden) {
        knapp1.innerText = "Stäng"
        InfoÖvningar.removeAttribute("hidden");
    }
    else {
        knapp1.innerText = "Läs mer";
        InfoÖvningar.hidden = true;

    }

}

function FärdigaSchema() {
    var knapp2 = document.getElementById("knapp2");
    var infoFärdigschema = document.getElementById("infoFärdigschema");

    if (infoFärdigschema.hidden) {
        infoFärdigschema.removeAttribute("hidden");
        knapp2.innerText = "Stäng";

    }
    else {
        infoFärdigschema.hidden = true;
        knapp2.innerText = "Läs mer";

    }
}



function Kost() {
    var knapp4 = document.getElementById("knapp4");
    var InfoKost = document.getElementById("Infokost");

    if (InfoKost.hidden) {
        InfoKost.removeAttribute("hidden");
        knapp4.innerText = "stäng";
    }
    else {
        InfoKost.hidden = true;
        knapp4.innerText = "Läs mer";
    }
}

/**Hamburger meny*/

function ShowMeny() {
    var knapp = document.getElementById("knapp");
    var meny = document.getElementById("Meny");

    if (meny.hidden) {
        meny.removeAttribute("hidden");
    }
    else {
        meny.hidden = true;
    }
}

function ShowMenyMobile() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("show-mobile");
}

let lastScroll = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;
    let header = document.querySelector("header");

    if (currentScroll === 0) {
        header.style.background = "none";
    }
    else if (currentScroll > lastScroll) {
        // Scrollar ner → göm navbar
        header.style.top = "-80px";



    } else {
        // Scrollar upp → visa navbar
        header.style.top = "0";
                header.style.background = "black";

    }

    lastScroll = currentScroll;
});