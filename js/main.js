const infoSection = document.getElementById("info");
const skillSection = document.getElementById("skill");
const languagesSection = document.getElementById("languages");
const projectsSection = document.getElementById("projects");

var header = document.getElementById("buttons");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function info() {
  infoSection.style.display = "block";
  skillSection.style.display = "none";
  languagesSection.style.display = "none";
  projectsSection.style.display = "none";
}

function skill() {
  infoSection.style.display = "none";
  skillSection.style.display = "block";
  languagesSection.style.display = "none";
  projectsSection.style.display = "none";
}
function languages() {
  infoSection.style.display = "none";
  skillSection.style.display = "none";
  languagesSection.style.display = "block";
  projectsSection.style.display = "none";
}
function projects() {
  infoSection.style.display = "none";
  skillSection.style.display = "none";
  languagesSection.style.display = "none";
  projectsSection.style.display = "block";
}
