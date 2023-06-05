const botao = document.getElementById('burguer')
const menuMobile = document.getElementById('menuMobile')
botao.addEventListener('click', abrir)

function abrir(){
    menuMobile.classList.toggle('active')
    if (botao.classList.contains('active')){
        botao.classList.remove('active')
    }else{
        botao.classList.add('active')
    }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
