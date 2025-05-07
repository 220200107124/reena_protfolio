document.addEventListener("DOMContentLoaded", function() {
  const tabsLinks = document.querySelectorAll(".tab-links");
  const tabsContents = document.querySelectorAll(".tab-content");

  // Activate first tab by default
  tabsContents[0].classList.add("active-tab");

  tabsLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active styles and hide all tabs
      tabsLinks.forEach((link) => link.classList.remove("active-link"));
      tabsContents.forEach((content) => content.classList.remove("active-tab"));

      // Activate clicked tab and show its content
      link.classList.add("active-link");
      tabsContents[index].classList.add("active-tab");
    });
  });
});