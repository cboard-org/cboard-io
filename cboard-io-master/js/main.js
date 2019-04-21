(function() {
  "use strict";
  const navToggle = document.querySelector(".nav-toggle");
  const openClassName = "nav-open";

  const toggleNav = () => document.body.classList.toggle(openClassName);

  navToggle.addEventListener("click", () => {
    toggleNav();
  });
})();
