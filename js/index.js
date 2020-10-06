let pages = document.getElementsByClassName("page");
let btns = document.getElementsByClassName("btn");

function setPage(page, btn) {
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active-btn");
  }
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  pages[page].style.display = "flex"
  btn.classList.add("active-btn");
}
