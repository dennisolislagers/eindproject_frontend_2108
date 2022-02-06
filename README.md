
#Wat Eten We Vandaag
Een webapplicatie waar je aan de hand van een aantal keuzes een gerecht krijgt.
Klik [hier](https://www.figma.com/community/file/1071053543958997060/Wat-eten-we-vandaag) voor de screenshots in Figma.


## Starten applicatie
Om de applicatie te kunnen gebruiken heb je een IDE nodig.
Ik heb gebruik gemaakt van Webstorm van Jetbrains.
Deze is te vinden op https://www.jetbrains.com/webstorm/download.
Deze kan gratis worden gedownload met een studentenlicentie van jetbrains.

###Om het project te starten moet je volgende stappen doorlopen:
- Start Webstorm.
- Clone de [repository](https://github.com/dennisolislagers/eindproject_frontend_2108.git) vanuit GitHub.
- In het volgende bestand: "src/components/queryform/QueryForm.js" moet er op de plek van de API je eigen app_ID en app_key worden ingevoerd.
  
  function submitButton(data){
  const total = `${data.mealType}, ${data.dietLabels}, ${data.healthLabels}, ${data.cuisineType}`
  const query = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${total}&app_id=VOER HIER JE EIGEN ID IN&app_key=VOER HIER JE EIGEN KEY IN&calories=${minCalorie}-${maxCalorie}&random=true`
  setQueryHandler (query);_                        _
  console.log(data, 'minCalorie: ' + minCalorie, 'maxCalorie: ' + maxCalorie )
  console.log(minCalorie)
  console.log(maxCalorie)
  result()
  }

- Deze key en ID kunnen aangemaakt worden op [API edamam ](https://www.edamam.com/)

###Als het project is gecloned naar webstorm kan het project gestart worden door in de terminal de volgende commando's te typen:
- 'npm install'
- 'npm run start'

###Het project is nu gestart op localhost:3000
- Als eerste moet je jezelf registreren met een gebruikersnaam, e-mailadres en je moet een wachtwoord verzinnen.
- Vervolgens kun je jezelf inloggen met de gebruikersnaam en het wachtwoord.
- Als dit allemaal gelukt is kom je bij het keuzemenu waar de keuze ontbijt al is vastgesteld, je kan deze keuze uiteraard veranderen als je dat wilt.
- In het keuzemenu kun je verschillende keuzes maken namelijk: dieet, allergie en de keuken.
- Er is ook een calorieteller waar je het aantal minimale calorieën en maximale calorieën die het gerecht mag hebben kunt bepalen.
- Tenslotte klik je op de button onderaan het menu en het gerecht wordt gepresenteerd op de volgende pagina.
- Als het gerecht echt niks voor je is of je wilt nog een ander gerecht kun je terug naar het keuzemenu.
- Je kan ook altijd uitloggen als je klaar bent.
 
