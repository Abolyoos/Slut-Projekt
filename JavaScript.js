/**Rad 1-59: Informations boxar om sidans olika kategorier*/

function Övnignar() {
    var knapp1 = document.getElementById("knapp1");
    var InfoÖvningar = document.getElementById("InfoÖvningar");
    if (InfoÖvningar.hidden) {
        InfoÖvningar.removeAttribute("hidden");
        knapp1.innerText = "Stäng";
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
        header.style.top = "-85px";

    } else {
        // Scrollar upp → visa navbar
        header.style.top = "0";
        header.style.background = "rgba(0,0,0,0.9)";

    }

    lastScroll = currentScroll;
});

let chosengender = "";

function Male() {
    chosengender = "male";
    document.getElementById("male").style.backgroundColor = "white";
    document.getElementById("female").style.backgroundColor = "";
}

function Female() {
    chosengender = "female";
    document.getElementById("female").style.backgroundColor = "white";
    document.getElementById("male").style.backgroundColor = "";
}

function CalculateIntake() {
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const displayIntake = document.getElementById("displayIntake");

    if (chosengender==="") {
        displayIntake.innerText="Välj kön först";
    }

    if (chosengender === "male") {
        const bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        displayIntake.innerText = bmr + " Kcal/dag för men";
    } else if (chosengender === "female") {
        const bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        displayIntake.innerText = bmr + " Kcal/dag för kvinnor";

    }
}

function ClearInputs() {
    chosengender="";

    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    const displayIntake = document.getElementById("displayIntake");

    document.getElementById("male").style.backgroundColor = "";
    document.getElementById("female").style.backgroundColor = "";

    age.value = "";
    weight.value = "";
    height.value = "";

    displayIntake.innerText = "Din dagliga intag";

}


/**
function Male() {
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const displayIntake = document.getElementById("displayIntake");

    const bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    displayIntake.innerText = bmr + " Kcal/dag";
}

function Female() {
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const displayIntake = document.getElementById("displayIntake");

    const bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    displayIntake.innerText = bmr + " Kcal/dag";


}

function ClearInputs() {
    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    age.value = "";
    weight.value="";
    height.value="";
    displayIntake.innerText="Din dagliga intag";
}

 */
