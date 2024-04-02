//! Nav кнопка-бургер при ширине от 600 и меньше
function myFunction(x) {
    x.classList.toggle("change");
} 

document.querySelector('.nav-button').addEventListener('click', function () {
        document.querySelector('.nav-list').classList.toggle('hide-show');
})