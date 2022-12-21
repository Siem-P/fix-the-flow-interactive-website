
//  "More Info" handler for category cards

let meerInfoKnoppen = document.querySelectorAll('.card-more-info-button');
let kaartExtraInfo = document.querySelector('.card-extra-info');

meerInfoKnoppen.forEach((meerInfoKnop) => {
    meerInfoKnop.addEventListener('click',  function() {
        let parentElement = this.closest('.card-wrapper');
        let targetElement = parentElement.querySelector('.card-extra-info');
        let btnElement = parentElement.querySelector('.card-more-info-button');

        targetElement.classList.toggle('hideCard');

        if(targetElement.classList.contains('hideCard')) {
            btnElement.innerHTML = "Minder info";
        } else {
            btnElement.innerHTML = "Meer info";
        }
    }
)})

function toggleInfoHandler() {
    kaartExtraInfo.classList.toggle('hideCard');
}

// Swipe indicator progress


const items = document.querySelectorAll('.card-container');
const indicators = document.querySelectorAll('.swipe-indicator-item');

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

// Observe each item in the category-container 
items.forEach(item => {
  observer.observe(item);
});


