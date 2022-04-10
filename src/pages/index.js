const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.header__logo');
const headerCloseButton = document.querySelector('.header__close-button');
const navigationBar = document.querySelector('.navigation');
const menuPath = "../images/burger-menu.svg";
const logoPath = "../images/logo.svg";

// Слушатель на открытие меню header
headerMenu.addEventListener('click', function (){
  // Проверка, что меню уже открыто
  if(headerCloseButton.classList.contains('hidden-class')){
    headerMenu.src = logoPath;
    headerMenu.style.width = "71px";
    headerLogo.classList.toggle('hidden-class');
    headerCloseButton.classList.toggle('hidden-class');
    navigationBar.classList.add('navigation_active');
  }
});

// Слушатель на закрытие меню header
headerCloseButton.addEventListener("click", function(){
  headerMenu.src = menuPath;
  headerMenu.style.width = "24px";
  headerLogo.classList.toggle('hidden-class');
  headerCloseButton.classList.toggle('hidden-class');
  navigationBar.classList.remove('navigation_active');
});
