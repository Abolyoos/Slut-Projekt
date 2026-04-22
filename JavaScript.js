/**Rad 1-59: Informations boxar om sidans olika kategorier*/

function Övnignar() {
    knapp1 = document.getElementById("knapp1");
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
let userActivity = 0;

function Sedentary() {
    userActivity = 1.2;
    document.getElementById("sedBtn").style.backgroundColor = "green";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";





}

function Light() {
    userActivity = 1.375;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "green";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";
}

function Moderate() {
    userActivity = 1.55;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "green";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";
}

function Heavy() {
    userActivity = 1.725;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "green";
    document.getElementById("athBtn").style.backgroundColor = "";
}

function Athlete() {
    userActivity = 1.9;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "green";
}

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

    const displayKcal = document.getElementById("displayKcal");
    const displayCarb = document.getElementById("displayCarb");
    const displayProtien = document.getElementById("displayProtien");
    const displayFat = document.getElementById("displayFat");

    const userKcalInfo = document.getElementById("userKcalInfo");
    const userBulkInfo = document.getElementById("userBulkInfo");
    const userCutInfo = document.getElementById("userCutInfo");
    const userDailyIntake = document.getElementById("userDailyIntake");

    if (chosengender === "") {
        userDailyIntake.innerText = "Välj kön först";
        return;
    }
    if (userActivity === 0) {
        userDailyIntake.innerText = "Välj aktivitetsnivå!";
        return;
    }
    if (!age || !weight || !height) {
        userDailyIntake.innerText = "Fyll i alla fält!";
        return;
    }

    let bmr = 0;
    if (chosengender === "male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    /**Fix macro display  (Kilo Kalorier*/
    const totalKcalories = Math.round(bmr * userActivity);

    const protienGrams = Math.round(weight * 2);
    const protienKcal = Math.round(protienGrams * 4);

    const fatKcal = Math.round(totalKcalories * 0.25);
    const fatGram = Math.round(fatKcal / 9);

    const remainingKcalories = Math.round(totalKcalories - protienKcal - fatKcal);
    const carbGrams = Math.round(remainingKcalories / 4);

    displayKcal.innerText = totalKcalories + " Kcal/dag";
    displayCarb.innerText = carbGrams + " Kolhydrater/dag";
    displayProtien.innerText = protienGrams + " Protien/dag";
    displayFat.innerText = fatGram + " Fett/dag";
    userKcalInfo.innerText = "Kalorierna du ska äta för att behålla din nuvarande vikt är " + (totalKcalories);
    userBulkInfo.innerText = "För att bygga muskler bör du äta" + (totalKcalories + 500);
    userCutInfo.innerText = "För att gå ner i vikt bör du äta" + (totalKcalories - 500);



    /**
    if (chosengender === "male") {
        const bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        displayIntake.innerText = bmr + " Kcal/dag för men";
    } else if (chosengender === "female") {
        const bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        displayIntake.innerText = bmr + " Kcal/dag för kvinnor";

    }
         */
}

function ClearInputs() {
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";
    chosengender = "";
    userActivity = 0;


    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    const displayKcal = document.getElementById("displayKcal");

    document.getElementById("male").style.backgroundColor = "";
    document.getElementById("female").style.backgroundColor = "";

    age.value = "";
    weight.value = "";
    height.value = "";

    displayKcal.innerText = "Din dagliga intag";
    displayCarb.innerText = "Kalorier:"
    displayProtien.innerText = "Protien:"
    displayFat.innerText = "Fett:"

    userBulkInfo.innerText="";
    userKcalInfo.innerText="";
    userCutInfo.innerText="";
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
