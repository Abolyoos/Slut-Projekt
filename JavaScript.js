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
    if (currentScroll <= 0) {
        header.style.top = "";
        header.style.background = "none";
        return;
    }

    if (currentScroll === 0) {
        header.style.background = "none";
    }
    else if (currentScroll > lastScroll) {
        // Scrollar ner → göm navbar
        header.style.top = "-85px";

    } else {
        // Scrollar upp → visa navbar
        header.style.top = "";
        header.style.background = "rgba(255, 255, 255, 0.8)";
    }
    if (window.innerHeight + currentScroll > document.body.offsetHeight) {
        header.style.top = "";
        return;
    }

    lastScroll = currentScroll;
});

/**Macro Tracker */

/**Globala variables */
let chosengender = "";
let userActivity = 0;


/**Users daily activity */
function Sedentary() {
    userActivity = 1.2;
    document.getElementById("sedBtn").style.backgroundColor = "rgb(0, 200, 0)";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";
}

function Light() {
    userActivity = 1.375;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "rgb(0, 200, 0)";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";
}

function Moderate() {
    userActivity = 1.55;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "rgb(0, 200, 0)";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";
}

function Heavy() {
    userActivity = 1.725;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "rgb(0, 200, 0)";
    document.getElementById("athBtn").style.backgroundColor = "";
}

function Athlete() {
    userActivity = 1.9;
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "rgb(0, 200, 0)";
}


/**If chosen gender is male */
function Male() {
    chosengender = "male";

    const genderChoice = document.getElementById("genderChoice");
    genderChoice.innerText = ("Man");


    const maleBtn = document.getElementById("male");
    const femaleBtn = document.getElementById("female");

    femaleBtn.style.backgroundColor = "rgb(0,200,0)";
    maleBtn.style.backgroundColor = "rgb(0, 100,0)";
}

/**If chosen gender is female */
function Female() {
    chosengender = "female";

    const genderChoice = document.getElementById("genderChoice");
    genderChoice.innerText = ("Kvinna");

    const maleBtn = document.getElementById("male");
    const femaleBtn = document.getElementById("female");

    femaleBtn.style.backgroundColor = "rgb(0,100,0)";
    maleBtn.style.backgroundColor = "rgb(0,200,0)";
}

/**Calculation of users daily intake */
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

    /**If no gender was chosen by the user */
    if (chosengender === "") {
        userDailyIntake.innerText = "Välj kön först";
        userDailyIntake.style.color = "red";
        userDailyIntake.style.fontSize = "20px";
        return;
    } else {

        /**If the value of the users activity level was not changed/(chosen by the user) */
        if (userActivity === 0) {
            userDailyIntake.innerText = "Välj aktivitetsnivå!";
            userDailyIntake.style.color = "red";
            userDailyIntake.style.fontSize = "20px";
            return;
        }

        /**If personal information was not found by the program */
        if (!age || !weight || !height) {
            userDailyIntake.innerText = "Fyll i alla fält!";
            userDailyIntake.style.color = "red";
            userDailyIntake.style.fontSize = "20px";
            return;
        }

        /**Calculation of the users daily intake */
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
        userDailyIntake.innerText = "Din dagliga intag";
        userDailyIntake.style.color = "white";
        userDailyIntake.style.fontSize = "20px";

    }
}

/**When the user wants to clear the inputs (Reset) */
function ClearInputs() {
    document.getElementById("sedBtn").style.backgroundColor = "";
    document.getElementById("lightBtn").style.backgroundColor = "";
    document.getElementById("modBtn").style.backgroundColor = "";
    document.getElementById("hevBtn").style.backgroundColor = "";
    document.getElementById("athBtn").style.backgroundColor = "";
    chosengender = "";
    userActivity = 0;
    genderChoice.innerText = "Kön";


    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    const displayKcal = document.getElementById("displayKcal");

    document.getElementById("male").style.backgroundColor = "";
    document.getElementById("female").style.backgroundColor = "";

    age.value = "";
    weight.value = "";
    height.value = "";

    userDailyIntake.innerText = "";

    displayKcal.innerText = "";
    displayCarb.innerText = "";
    displayProtien.innerText = "";
    displayFat.innerText = "";

    userBulkInfo.innerText = "";
    userKcalInfo.innerText = "";
    userCutInfo.innerText = "";


}





