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

> #17 Als gebruiker wil ik een soort interactieve checklist kunnen bijhouden over de wettelijke toegankelijkheidsrichtlijnen voor mijn eigen website.

<!-- Voeg een mooie poster visual toe 📸 -->
### Preview - Website
<img src="https://user-images.githubusercontent.com/64197688/214432517-be03f47c-e214-4eca-8d48-6c2ce55263cc.png">
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

### JavaScript
Voor deze interactie heb ik onder andere gewerkt met de `IntersectionObserver` en dat was erg uitdagend om te doen.

```
// Observer check if element enter the viewport, and 
// then add the active class to the element in view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        // Update the indicator elements
        indicators.forEach((indicator, index) => {
          if (entry.target === items[index]) {
            indicator.classList.add('indicator-active');
          } else {
            indicator.classList.remove('indicator-active');	
          }
        });
      }
    });
  });

```

In de HTML heb ik een indicator gemaakt die de gebruiker feedback geeft. De feedback is in dit geval de slide waar de gebruiker zich bevindt.
```
<div class="swipe-indicator">
    <span class="swipe-indicator-item"></span>
    <span class="swipe-indicator-item"></span>
    <span class="swipe-indicator-item"></span>
    <span class="swipe-indicator-item"></span>
</div>
```

## Bronnen
De WCAG richtlijnen - 
https://wcag.nl/ <br>
Huistijl Vervoerregio Amsterdam - <br>
https://github.com/fdnd-agency/vervoerregio-amsterdam/blob/main/Vervoerregio%20Handboek_Huisstijl%202021.pdf

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
