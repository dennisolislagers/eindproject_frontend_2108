#Verantwoordingsdocument.
- Om de gegevens binnen te halen via een request heb ik gebruik gemaakt van axios.
- Ik heb diverse componenten gemaakt die in de applicatie gebruikt worden, ook als het maar een enkele keer wordt gebruikt.
Dit heb ik gedaan zodat in de toekomst deze componenten makkelijk gebruikt kunnen worden als de applicatie verder ontwikkeld wordt.
- De componenten heb ik zo klein mogelijk gemaakt. Er zijn dan wel meerdere componenten die op elkaar lijken.
Dit heb ik gedaan voor de gebruikersvriendelijkheid voor het programmeren. 
Sommige proporties van een component hebben al in het component een vaste waarde gekregen
en zo hoef je geen waarde meer mee te geven als je het component gebruikt.
- Sommige pagina's heb ik ook als component gemaakt zodat er een beter overzicht is op de pagina's zelf, de pagina's worden nu niet te groot.
- Ik heb context gemaakt die de gebruiker bepaalde rechten geeft om bepaalde pagina's te bezoeken.
Hier heb ik voor gekozen zodat je makkelijk bepaalde pagina's alleen toegankelijk zijn als een gebruiker is ingelogd.
- Van de gegevens die terug komen van de backend heb ik de gebruikersnaam van de ingelogde gebruiker gebruikt om deze weer te geven bovenaan
het keuzemenu. Zo wordt de pagina persoonlijker.
- Ik heb nog een tweede context gemaakt die de gebruiker naar het juiste gedeelte van de laatste pagina laat gaan.
Deze pagina is in tweeën gedeeld, op het eerste gedeelte is het keuzemenu te zien en op het tweede gedeelte het gerecht wat uit de API komt.
De gegevens van het keuzemenu worden als argument doorgegeven naar het tweede gedeelte van de pagina.
Met deze gegevens wordt er een data-request gestuurd naar de API van Edamam.
Hier heb ik voor gekozen om de resultpage niet te groot te laten worden.
- Voor het verwerken van de gegevens heb ik gebruik gemaakt van react-hook-form
Hier heb ik voor gekozen zodat de pagina's niet vol staan met state, dit is ook voor het overzichtelijk maken van de pagina's.
- Voor de styling van App.js (hoofdpagina) heb ik gekozen voor CSS GRID.
Op deze manier is de pagina makkelijk responsive te maken voor meerdere schermtypes(mobiel en desktop).
- Voor de styling de andere pagina's heb ik gebruik gemaakt van flexbox omdat dit makkelijker werken is.
- Om de naam van de gebruiker te laten zien bovenaan het keuzemenu de data gebruikt met axios.
- Ik heb gebruik gemaakt van useHistory om submitbuttons te voorzien van routing.
- Voor het afronden van de waarde van calorieën heb ik een helper gemaakt die gebruik gemaakt van Math.round, zo krijg je een mooi heel getal.
- De API geeft een array terug waar 20 gerechten staan, omdat ik maar 1 gerecht wil laten zien heb ik gebruik gemaakt van map.slice 
om alleen het eerste gerecht te laten zien.
- In de API zijn twee keuzes die je kunt maken, de eerste keuze is: 20 vaste gerechten en dan krijg je steeds dezelfde gerechten 
maar je kan een volgende 20 gerechten knop maken met het endpoint die de API meestuurt.
Op deze knop zet dan het endpoint zodat je naar de volgende 20 gerechten gaat.
De volgende keuze, die heb ik gekozen, is random 20 gerechten maar de API stuurt dan geen endpoint mee voor de volgende 20 gerechten.
Om een nieuwe keuze te maken moet je terug naar het keuzemenu.



##De beperkingen van de applicatie.
- Omdat er gebruik wordt gemaakt van een API ben je afhankelijk van de gegevens die terug worden gegeven vanuit deze API.
- Een manco hiervan is dat je naar de webpagina moet om het gehele recept te kunnen zien omdat niet alle gegevens worden teruggegeven vanuit de API.
- Ook komt het wel eens voor dat er op de link van de pagina wordt geklikt en dat deze pagina niet meer bestaat,
  dit kan wel als vervelend worden ervaren en kan door een eigen backend vermeden worden.
- Omdat de gegevens tijdelijk worden opgeslagen moet je jezelf elke keer weer registreren

##Verdere ontwikkelingen.
- Als er een eigen backend is kan het gehele recept aan de gebruiker worden getoond en ben je niet afhankelijk van de API.
- Bij het gebruik van een eigen backend heb je meer controle over wat je de gebruiker wilt laten zien.
- De mogelijkheid om een boodschappenlijst uit te printen en deze ook aan te passen naar het aantal personen.
- Met een eigen backend kan de gebruiker een favorietenlijst maken en aantekeningen maken bij een recept en deze opslaan.

