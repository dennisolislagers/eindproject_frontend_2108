
#Welkom bij de applicatie Wat Eten We Vandaag
Een webapplicatie waar je aan de hand van een aantal keuzes een gerecht krijgt..


## Starten applicatie
Om het project te starten, voer in de terminal de volgende commando's uit:
- 'npm install'
- 'npm run start'

In het volgende bestand: "src/components/queryform/QueryForm.js" moet er op de plek van de API je eigen app_ID en app_key worden ingevoerd.
Deze key en ID kunnen aangemaakt worden op [API edamam ](https://www.edamam.com/)

    function submitButton(data){
        const total = `${data.mealType}, ${data.dietLabels}, ${data.healthLabels}, ${data.cuisineType}`
        const query = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${total}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY&calories=${minCalorie}-${maxCalorie}&random=true`
        setQueryHandler (query);
        console.log(data, 'minCalorie: ' + minCalorie, 'maxCalorie: ' + maxCalorie )
        console.log(minCalorie)
        console.log(maxCalorie)
        result()
    }


#Verantoordingsdocument.

##Technologiën die gebruikt zijn:
- React.
- CSS.
- Flexbox.
- API van Edamam (www.edamam.com/).
- Grid

##De beperkingen van de applicatie.
- Omdat er gebruik wordt gemaakt van een API ben je afhankelijk van de gegevens die terug worden gegeven vanuit deze API.
- Een manco hiervan is dat je naar de webpagina moet om het gehele recept te kunnen zien omdat niet alle gegevens worden teruggegeven vanuit de API.
- Ook komt het wel eens voor dat er op de link van de pagina wordt geklikt en dat deze pagina niet meer bestaat, dit kan wel als vervelend worden ervaren en 
kan door een eigen backend vermeden worden.

##Verdere ontwikkelingen.
- Als er een eigen backend voorhanden is kan het gehele recept aan de gebruiker worden getoond en ben je niet afhankelijk van de API.
- De mogelijkheid om een boodschappenlijst uit te printen en deze ook aan te passen naar het aantal personen.