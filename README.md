# Toolgankelijk - Vervoerregio Amsterdam

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Titel 
Toolgankelijk - Het overzicht van de minimale toegankelijkheid richtlijnen voor het verbeteren van toegankelijkheid op een website of applicatie.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
In deze repository is mijn opdracht voor 'Look and feel corporate identity - Vervoerregio Amsterdam' te vinden. 


De user stories die behandeld zijn in mijn project:
> #1 Als organisatie wil ik een overzicht van toegankelijkheidsverbeteringen kunnen bekijken, zodat ik een gevoel kan krijgen wat er moet gebeuren om mijn website/app toegankelijker te maken op het terrein van waarneembaarheid, robuustheid, begrijpelijkheid en bedienbaarheid.

> #15 Als bezoeker van de tool wil ik contactinformatie kunnen achterhalen over wie de eigenaar/maker van deze tool is.

<!-- Voeg een mooie poster visual toe 📸 -->
### Preview - Website
<img src="https://user-images.githubusercontent.com/64197688/195725764-c18e2949-f526-4fac-8aac-25086785145f.png">
<!-- Voeg een link toe naar Github Pages 🌐-->

## Live website 
:o: Voor een live bezichtiging ->
http://siemva.student.fdnd.nl/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Voor het maken van deze website is er gebruik gemaakt van HTML, CSS & Javascript. 


### HTML structuur
In dit project wordt gebruik gemaakt van een simpele HTML layout. 
Met daarin een `<main>` `<section>` `<nav>` & `<article>`.

### CSS
Vormgeving en media queries zijn een belangrijk onderdeel van de website. Volgens mijn analyse is het noodzakelijk dat ik de huisstijl van *Vervoerregio Amsterdam* volg. Zie bronnen voor de link naar de huisttijl (pdf).

Media queries is een erg belangrijk onderdeel van de website. (Dit is nog niet af)
Tijdens de analyse en ontwerpfase heb ik ondervonden dat de onderstaande mediaqueries belangrijk zijn voor het gebruik van de website.
```
@media (min-width: 1024px) {} - Desktop
@media (min-width: 768px) and (max-width: 1023px) {} - Tablet/iPad
@media (min-width: 320px) and (max-width: 767px) {} - Mobile
```
Responsiveness is nog niet af!

### JavaScript
Voor het bouwen van de eerste user story was er een belangrijk stuk JavaScript nodig. 
Dit had ik op meerdere manieren kunnen doen, maar ik heb gekozen om het met `data-id`'s te doen.

```
const navButtons = document.querySelectorAll(".nav-button");
const cardsContent = document.querySelectorAll(".card-heading");

console.log(navButtons.length);
console.log(cardsContent.length);

navButtons.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.dataset.id;
    const active = document.getElementById(id);

    cardsContent.forEach((content) => content.classList.add("hide-show"));
    active.classList.remove("hide-show");
  });
});
```

In de HTML wordt hier een kopje wel of niet laten zien, door middel van de `data-id`.
```
<li ><button class="nav-button" data-id="card1_0">Waarneembaar</button></li>
```

## Bronnen
De WCAG richtlijnen - 
https://wcag.nl/ <br>
Huistijl Vervoerregio Amsterdam - <br>
https://github.com/fdnd-agency/vervoerregio-amsterdam/blob/main/Vervoerregio%20Handboek_Huisstijl%202021.pdf

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
