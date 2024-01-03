const menu = document.querySelector(".menu");
const spanTop = document.querySelector(".top");
const spanCenter = document.querySelector(".center");
const spanBottom = document.querySelector(".bottom");
const navBar = document.querySelector(".navList_close");

menu.addEventListener("click", () => {
  navBar.classList.toggle("navList_open");
  spanTop.classList.toggle('top_active')
  spanCenter.classList.toggle('center_active');
  spanBottom.classList.toggle('bottom_active');
});
