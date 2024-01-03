//? Burger menu 
const menuTop = document.querySelector('#top')
const menuCenter = document.querySelector('#center')
const menuBottoom = document.querySelector('#bottom')
const burgerMenu = document.querySelector('.burger_menu')
const navBar = document.querySelector('#navBar')

burgerMenu.addEventListener('click', ()=>{
  menuTop.classList.toggle('top')
  menuCenter.classList.toggle('center')
  menuBottoom.classList.toggle('bottom')
  navBar.classList.toggle('open')
})