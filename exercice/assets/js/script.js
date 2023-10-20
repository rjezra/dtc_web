var sidenav = document.getElementById("menumobil");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}


function closeNav() {
  sidenav.classList.remove("active");
}
