document.addEventListener("DOMContentLoaded", function() {

  /* MENU MOBILE */
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });

  /* BOUTON "REMONTÉE EN HAUT" */
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) backToTop.style.display = "block";
    else backToTop.style.display = "none";
  });

  backToTop.addEventListener("click", function() {
    window.scrollTo({ top:0, behavior:"smooth" });
  });

  /* SLIDER POUR ACTUALITÉS */
  const newsCards = document.querySelectorAll("#news .card");
  let currentIndex = 0;

  if(newsCards.length > 0){
    function showNewsCard(index){
      newsCards.forEach((card,i) => card.style.display = i===index ? "block":"none");
    }
    showNewsCard(currentIndex);
    setInterval(() => { currentIndex=(currentIndex+1)%newsCards.length; showNewsCard(currentIndex); },3000);
  }

  /* ANIMATION AU SCROLL */
  const sections = document.querySelectorAll(".section, .hero");
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });

});