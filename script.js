let dropdownTag = document.getElementsByClassName("sec-4-dropdown");
let chevronBtn = document.getElementsByClassName("chevron-btn");
let showDiv = document.getElementsByClassName("sec-4-show-div");
let hamBurger = document.getElementsByClassName("nav-bar-hamburger");
let extraNavbar = document.getElementsByClassName("extra-navbar");
let hamBurgerClicked = false;
let isClicked = true;

for (let i = 0; i < dropdownTag.length; i++) {
  dropdownTag[i].addEventListener("click", (e) => {
    if (isClicked === true) {
      chevronBtn[i].classList.remove("fa-chevron-down");
      chevronBtn[i].classList.add("fa-chevron-up");
      showDiv[i].style.display = "block";
    } else {
      chevronBtn[i].classList.remove("fa-chevron-up");
      chevronBtn[i].classList.add("fa-chevron-down");
      showDiv[i].style.display = "none";
    }
    isClicked = !isClicked;
  });
}
hamBurger[0].addEventListener("click", (e) => {
  if (hamBurgerClicked === false) {
    hamBurger[0].classList.remove("fa-sharp", "fa-bars");
    hamBurger[0].classList.add("fa-x");
    extraNavbar[0].style.display = "block";
  } else {
    hamBurger[0].classList.remove("fa-x");
    hamBurger[0].classList.add("fa-sharp", "fa-bars");
    extraNavbar[0].style.display = "none";
  }
  hamBurgerClicked = !hamBurgerClicked;
});
// console.dir(extraNavbar);
