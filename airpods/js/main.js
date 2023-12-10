let chooseColor = document.querySelectorAll('.choose__color-btn');
let contentItem = document.querySelectorAll('.content-item')




chooseColor.forEach(function(element){
    element.addEventListener('click',open)
})


function open(event){
    const target = event.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`)
    console.log(contentActive)

    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active')
    })
    target.classList.add('choose__color-btn--active')

    contentItem.forEach(function(item){
        item.classList.remove('content-item--active')
    })
    contentActive.forEach(function(item){
        item.classList.add('content-item--active')
    })
}