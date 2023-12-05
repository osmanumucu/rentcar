document.querySelectorAll('.klas').forEach(button => {
    button.addEventListener('focus', function () {
        let prev = this.previousElementSibling;
        while (prev) {
            prev.classList.add('move-up');
            prev = prev.previousElementSibling;
        }
    });

    button.addEventListener('blur', function () {
        let prev = this.previousElementSibling;
        while (prev) {
            prev.classList.remove('move-up');
            prev = prev.previousElementSibling;
        }
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

function Golf() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    // Vind de Volkswagen Golf in de groep "C"
    const golf = autosData.autos.C.modellen.find(model => model.Merk === "Volkswagen");

    // Controleer of de Volkswagen Golf gevonden is
    if (golf) {
        merkText.textContent = `${golf.Merk}`;
        modelText.textContent = `${golf.Model}`;
        bouwjaarText.textContent = `${golf.Bouwjaar}`;
        deurenText.textContent = `${golf.Deuren}`;
        transmissieText.textContent = `${golf.Transmissie}`;
        brandstofText.textContent = `${golf.Brandstof}`;
        prijsText.textContent = `${golf.Prijs}`
        document.getElementById("autoAfbeelding").src = golf.Afbeelding;
    } else {
        merkText.textContent = "Er is een fout opgetreden";
        modelText.textContent = "Er is een fout opgetreden";
        bouwjaarText.textContent = "Er is een fout opgetreden";
        deurenText.textContent = "Er is een fout opgetreden";
        transmissieText.textContent = "Er is een fout opgetreden";
        brandstofText.textContent = "Er is een fout opgetreden";
    }
}

function Toyota() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    // Vind de Volkswagen Golf in de groep "C"
    const Toyota = autosData.autos.B.modellen.find(model => model.Merk === "Toyota");

    // Controleer of de Volkswagen Golf gevonden is
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

function BMW() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    // Vind de Volkswagen Golf in de groep "C"
    const BMW = autosData.autos.A.modellen.find(model => model.Merk === "BMW");

    // Controleer of de Volkswagen Golf gevonden is
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

function Porche() {
    if (!autosData) {
        merkText.textContent = "Data is nog niet geladen";
        return;
    }

    // Vind de Volkswagen Golf in de groep "C"
    const Porche = autosData.autos.S.modellen.find(model => model.Merk === "Porche");

    // Controleer of de Volkswagen Golf gevonden is
    if (BMW) {
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

