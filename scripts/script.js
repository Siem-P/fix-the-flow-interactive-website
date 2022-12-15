



//  More Info handler for category cards

let meerInfoKnoppen = document.querySelectorAll('.card-more-info-button');
let kaartExtraInfo = document.querySelector('.card-extra-info');

meerInfoKnoppen.forEach((meerInfoKnop) => {
    meerInfoKnop.addEventListener('click',  function() {
        let parentElement = this.closest('.card-wrapper');
        let targetElement = parentElement.querySelector('.card-extra-info');
        let btnElement = parentElement.querySelector('#more-info-button');

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