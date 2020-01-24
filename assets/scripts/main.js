/**
 * Result section navigation toggle
 */
let sectionNavigationButton = document.querySelector(".navigation-toggle");
let sectionNavigation = document.querySelector(".result__navigation");
sectionNavigationButton.addEventListener("click", toggleSectionNavigation);

function toggleSectionNavigation(){
  if(sectionNavigation.classList.contains("active")){
    // hide navigation
    sectionNavigation.classList.remove("active");
  } else {
    // display navigation
    sectionNavigation.classList.add("active");
  }
}