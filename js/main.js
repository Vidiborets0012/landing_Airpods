
const chooseColor = document.querySelectorAll('.choos-color-btn');
console.log('chooseColor:', chooseColor);

const contentItem = document.querySelectorAll('.content-item');
console.log('contentItem:', contentItem);


chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(event) {
    const target = event.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function (item) {
        item.classList.remove('choos-color-btn-active')
    });

    target.classList.add('choos-color-btn-active')

    contentItem.forEach(function (item) {
        item.classList.remove('content-item-active')
    });

    contentActive.forEach(function (item) {
        item.classList.add('content-item-active')
    });
}