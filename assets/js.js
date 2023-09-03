document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("header");
  iconMenu = document.querySelector(".header-icon-menu");
  iconClose = document.querySelector(".header-icon-close");
  var ul = document.querySelector("ul");



  iconMenu.addEventListener("click", function() {
      ul.classList.add("add-ul-open");
      header.classList.add("show");
  });

  iconClose.addEventListener("click", function() {
      ul.classList.remove("add-ul-open");
      header.classList.remove("show");
 
  });

  function Resize() {
    if (window.innerWidth > 450 && header.classList.contains("show")) {
          ul.classList.remove("add-ul-open");
          header.classList.remove("show");

      }
      
  }
  

  window.addEventListener("resize", Resize);
  Resize();
});

