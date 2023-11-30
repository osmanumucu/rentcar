const merkText = document.getElementById("merk");
const modelText = document.getElementById("model");
const bouwjaarText = document.getElementById("bouwjaar");
const deurenText = document.getElementById("deuren");
const transmissieText = document.getElementById("transmissie");
const brandstofText = document.getElementById("brandstof");


fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        function Cklas () {
            // Vind de Volkswagen Golf in de groep "C"
            const golf = data.autos.C.modellen.find(model => model.Merk === "Volkswagen");

            // Controleer of de Volkswagen Golf gevonden is
            if (golf) {
                // Update de tekst van het h1-element met het aantal deuren van de Volkswagen Golf
                merkText.textContent = `${golf.Merk}`;
                modelText.textContent = `${golf.Model}`;
                bouwjaarText.textContent = `${golf.Bouwjaar}`;
                deurenText.textContent = `${golf.Deuren}`
                transmissieText.textContent = `${golf.Transmissie}`
                brandstofText.textContent = `${golf.Brandstof}`
            } else {
                // Als de Volkswagen Golf niet gevonden is, toon dan een foutmelding
                merkText.textContent = "Volkswagen Golf niet gevonden";
            }
        }
    })
    .catch(error => {
        console.error('Er is een fout opgetreden bij het ophalen van de data:', error);
        merkText.textContent = "Fout bij het laden van gegevens";
    });
