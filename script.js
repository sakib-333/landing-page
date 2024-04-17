let dropdownTag = document.getElementsByClassName("sec-4-dropdown");
let chevronBtn = document.getElementsByClassName("chevron-btn");
let showDiv = document.getElementsByClassName("sec-4-show-div");
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
