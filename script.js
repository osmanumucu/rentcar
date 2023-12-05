let lastClickedButton = null; // Variable to store the last clicked button

document.querySelectorAll('.klas').forEach(button => {
    button.addEventListener('click', function () {
        // If a different button was clicked previously, remove move-up class from it and its preceding siblings
        if (lastClickedButton && lastClickedButton !== this) {
            let current = lastClickedButton;
            while (current) {
                current.classList.remove('move-up');
                current = current.previousElementSibling;
            }
        }

        // If this button is not already moved up, move it and its preceding siblings up
        if (!this.classList.contains('move-up')) {
            let current = this;
            while (current) {
                current.classList.add('move-up');
                current = current.previousElementSibling;
            }
        } else {
            // If this button is already moved up, move it and its preceding siblings down
            let current = this;
            while (current) {
                current.classList.remove('move-up');
                current = current.previousElementSibling;
            }
        }

        // Update the last clicked button reference
        lastClickedButton = this.classList.contains('move-up') ? this : null;
    });
});



var merkText = document.getElementById("merk");
var modelText = document.getElementById("model");
var bouwjaarText = document.getElementById("bouwjaar");
var deurenText = document.getElementById("deuren");
var transmissieText = document.getElementById("transmissie");
var brandstofText = document.getElementById("brandstof");
var prijsText = document.getElementById("prijs")

let autosData = null;

fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        autosData = data;
    })
    .catch(error => {
        console.error('Er is een fout opgetreden bij het ophalen van de data:', error);
        merkText.textContent = "Fout bij het laden van gegevens";
    });

/* S TIER*/

function Porche() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Porche = autosData.autos.S.modellen.find(model => model.Merk === "Porche");

    if (Porche) {
        merkText.textContent = `${Porche.Merk}`;
        modelText.textContent = `${Porche.Model}`;
        bouwjaarText.textContent = `${Porche.Bouwjaar}`;
        deurenText.textContent = `${Porche.Deuren}`;
        transmissieText.textContent = `${Porche.Transmissie}`;
        brandstofText.textContent = `${Porche.Brandstof}`;
        prijsText.textContent = `${Porche.Prijs}`
        document.getElementById("autoAfbeelding").src = Porche.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Mercedes() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Mercedes = autosData.autos.S.modellen.find(model => model.Merk === "Mercedes");

    if (Mercedes) {
        merkText.textContent = `${Mercedes.Merk}`;
        modelText.textContent = `${Mercedes.Model}`;
        bouwjaarText.textContent = `${Mercedes.Bouwjaar}`;
        deurenText.textContent = `${Mercedes.Deuren}`;
        transmissieText.textContent = `${Mercedes.Transmissie}`;
        brandstofText.textContent = `${Mercedes.Brandstof}`;
        prijsText.textContent = `${Mercedes.Prijs}`
        document.getElementById("autoAfbeelding").src = Mercedes.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Audi() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Audi = autosData.autos.S.modellen.find(model => model.Merk === "Audi");

    if (Audi) {
        merkText.textContent = `${Audi.Merk}`;
        modelText.textContent = `${Audi.Model}`;
        bouwjaarText.textContent = `${Audi.Bouwjaar}`;
        deurenText.textContent = `${Audi.Deuren}`;
        transmissieText.textContent = `${Audi.Transmissie}`;
        brandstofText.textContent = `${Audi.Brandstof}`;
        prijsText.textContent = `${Audi.Prijs}`
        document.getElementById("autoAfbeelding").src = Audi.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

/* A TIER */

function BMW() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const BMW = autosData.autos.A.modellen.find(model => model.Merk === "BMW");

    if (BMW) {
        merkText.textContent = `${BMW.Merk}`;
        modelText.textContent = `${BMW.Model}`;
        bouwjaarText.textContent = `${BMW.Bouwjaar}`;
        deurenText.textContent = `${BMW.Deuren}`;
        transmissieText.textContent = `${BMW.Transmissie}`;
        brandstofText.textContent = `${BMW.Brandstof}`;
        prijsText.textContent = `${BMW.Prijs}`
        document.getElementById("autoAfbeelding").src = BMW.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Lexus() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Lexus = autosData.autos.A.modellen.find(model => model.Merk === "Lexus");

    if (Lexus) {
        merkText.textContent = `${Lexus.Merk}`;
        modelText.textContent = `${Lexus.Model}`;
        bouwjaarText.textContent = `${Lexus.Bouwjaar}`;
        deurenText.textContent = `${Lexus.Deuren}`;
        transmissieText.textContent = `${Lexus.Transmissie}`;
        brandstofText.textContent = `${Lexus.Brandstof}`;
        prijsText.textContent = `${Lexus.Prijs}`
        document.getElementById("autoAfbeelding").src = Lexus.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Volvo() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Volvo = autosData.autos.A.modellen.find(model => model.Merk === "Volvo");

    if (Volvo) {
        merkText.textContent = `${Volvo.Merk}`;
        modelText.textContent = `${Volvo.Model}`;
        bouwjaarText.textContent = `${Volvo.Bouwjaar}`;
        deurenText.textContent = `${Volvo.Deuren}`;
        transmissieText.textContent = `${Volvo.Transmissie}`;
        brandstofText.textContent = `${Volvo.Brandstof}`;
        prijsText.textContent = `${Volvo.Prijs}`
        document.getElementById("autoAfbeelding").src = Volvo.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

/* B TIER */

function Toyota() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Toyota = autosData.autos.B.modellen.find(model => model.Merk === "Toyota");

    if (Toyota) {
        merkText.textContent = `${Toyota.Merk}`;
        modelText.textContent = `${Toyota.Model}`;
        bouwjaarText.textContent = `${Toyota.Bouwjaar}`;
        deurenText.textContent = `${Toyota.Deuren}`;
        transmissieText.textContent = `${Toyota.Transmissie}`;
        brandstofText.textContent = `${Toyota.Brandstof}`;
        prijsText.textContent = `${Toyota.Prijs}`
        document.getElementById("autoAfbeelding").src = Toyota.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Ford() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Ford = autosData.autos.B.modellen.find(model => model.Merk === "Ford");

    if (Ford) {
        merkText.textContent = `${Ford.Merk}`;
        modelText.textContent = `${Ford.Model}`;
        bouwjaarText.textContent = `${Ford.Bouwjaar}`;
        deurenText.textContent = `${Ford.Deuren}`;
        transmissieText.textContent = `${Ford.Transmissie}`;
        brandstofText.textContent = `${Ford.Brandstof}`;
        prijsText.textContent = `${Ford.Prijs}`
        document.getElementById("autoAfbeelding").src = Ford.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Honda() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Honda = autosData.autos.B.modellen.find(model => model.Merk === "Honda");

    if (Honda) {
        merkText.textContent = `${Honda.Merk}`;
        modelText.textContent = `${Honda.Model}`;
        bouwjaarText.textContent = `${Honda.Bouwjaar}`;
        deurenText.textContent = `${Honda.Deuren}`;
        transmissieText.textContent = `${Honda.Transmissie}`;
        brandstofText.textContent = `${Honda.Brandstof}`;
        prijsText.textContent = `${Honda.Prijs}`
        document.getElementById("autoAfbeelding").src = Honda.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

/* C TIER */

function Volkswagen() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Volkswagen = autosData.autos.C.modellen.find(model => model.Merk === "Volkswagen");

    if (Volkswagen) {
        merkText.textContent = `${Volkswagen.Merk}`;
        modelText.textContent = `${Volkswagen.Model}`;
        bouwjaarText.textContent = `${Volkswagen.Bouwjaar}`;
        deurenText.textContent = `${Volkswagen.Deuren}`;
        transmissieText.textContent = `${Volkswagen.Transmissie}`;
        brandstofText.textContent = `${Volkswagen.Brandstof}`;
        prijsText.textContent = `${Volkswagen.Prijs}`
        document.getElementById("autoAfbeelding").src = Volkswagen.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Hyundai() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Hyundai = autosData.autos.C.modellen.find(model => model.Merk === "Hyundai");

    if (Hyundai) {
        merkText.textContent = `${Hyundai.Merk}`;
        modelText.textContent = `${Hyundai.Model}`;
        bouwjaarText.textContent = `${Hyundai.Bouwjaar}`;
        deurenText.textContent = `${Hyundai.Deuren}`;
        transmissieText.textContent = `${Hyundai.Transmissie}`;
        brandstofText.textContent = `${Hyundai.Brandstof}`;
        prijsText.textContent = `${Hyundai.Prijs}`
        document.getElementById("autoAfbeelding").src = Hyundai.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Kia() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    const Kia = autosData.autos.C.modellen.find(model => model.Merk === "Kia");

    if (Kia) {
        merkText.textContent = `${Kia.Merk}`;
        modelText.textContent = `${Kia.Model}`;
        bouwjaarText.textContent = `${Kia.Bouwjaar}`;
        deurenText.textContent = `${Kia.Deuren}`;
        transmissieText.textContent = `${Kia.Transmissie}`;
        brandstofText.textContent = `${Kia.Brandstof}`;
        prijsText.textContent = `${Kia.Prijs}`
        document.getElementById("autoAfbeelding").src = Kia.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}