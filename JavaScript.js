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


function ShowMenyMobile() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("show-mobile");
}

/**Navigator scroll effect */

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

/**Macro Tracker */

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

    const maleBtn = document.getElementById("male");
    const femaleBtn = document.getElementById("female");

    femaleBtn.style.backgroundColor = "rgb(0,200,0)";
    maleBtn.style.backgroundColor = "rgb(0, 100,0)";

}

function Female() {
    chosengender = "female";

    const maleBtn = document.getElementById("male");
    const femaleBtn = document.getElementById("female");

    femaleBtn.style.backgroundColor = "rgb(0,100,0)";
    maleBtn.style.backgroundColor = "rgb(0,200,0)";
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

    const totalKcalories = Math.round(bmr * userActivity);

    const protienGrams = Math.round(weight * 2);
    const protienKcal = Math.round(protienGrams * 4);

    const fatKcal = Math.round(totalKcalories * 0.25);
    const fatGram = Math.round(fatKcal / 9);

    const remainingKcalories = Math.round(totalKcalories - protienKcal - fatKcal);
    const carbGrams = Math.round(remainingKcalories / 4);

    displayKcal.innerText = totalKcalories + " Kcal/dag";
    displayCarb.innerText = carbGrams + "g Kolhydrater/dag";
    displayProtien.innerText = protienGrams + "g Protien/dag";
    displayFat.innerText = fatGram + "g Fett/dag";
    userKcalInfo.innerText = "Kalorierna du ska äta dagligen för att behålla din nuvarande vikt är " + (totalKcalories) + " Kcal";
    userBulkInfo.innerText = "För att bygga muskler bör du äta " + (totalKcalories + 500) + " kcal/dag";
    userCutInfo.innerText = "För att gå ner i vikt bör du äta " + (totalKcalories - 500) + " Kcal/dag";

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

    userDailyIntake.innerText = "Din dagliga intag";

    displayKcal.innerText = "Din dagliga intag";
    displayCarb.innerText = "Kalorier:"
    displayProtien.innerText = "Protien:"
    displayFat.innerText = "Fett:"

    userBulkInfo.innerText = "";
    userKcalInfo.innerText = "";
    userCutInfo.innerText = "";
}


